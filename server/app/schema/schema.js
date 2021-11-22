const graphql = require('graphql');
const { Quote, User }  = require('../models');

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
} = graphql;

const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLInt},
        userId: {type: GraphQLInt},
        user: { // relationship
            type: UserType,
            resolve(parent, args) {
               return User.findOne({where: { id: parent.user_id }})
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        email: {type: GraphQLString},
        quotes: { // relationship
            type: new GraphQLList(QuoteType),
            resolve(parent, args) {
                return Quote.findAll({where: { userId: parent.id }})
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        quote: {
            type: QuoteType,
            // only allow id as arg
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log({success: `great! ${args.id}`});
                return Quote.findOne({where: {id: args.id}});
            }
        },
        quotes: {
            type: new GraphQLList(QuoteType),
            args: {},
            resolve(parent, args) {
                return Quote.findAll();
            }
        },
        user: {
            type: UserType,
            // only allow id as arg
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log({success: `great! ${args.id}`});
                return User.findOne({where: {id: args.id}});
            }        
        },
        users: {
            type: new GraphQLList(UserType),
            args: {},
            resolve(parent, args) {
                return User.findAll();
            }
        },
    }
})

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: GraphQLString},
            },
            resolve(parent, args) {
                return User.create({name: args.name, email: args.email});
            }
        },
        addQuote: {
            type: QuoteType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLString},
                price: {type: GraphQLInt},
                userId: {type: GraphQLID},
            },
            resolve(parent, args) {
                return Quote.create({name: args.name, description: args.description, price: args.price, userId: args.userId});
            }
        },
        updateQuote: {
            type: QuoteType,
            args: {
                id: {type: GraphQLID},
                userId: {type: GraphQLInt},
            },
            resolve(parent, args) {
                const whereObj = {};
                if (args.userId) whereObj.userId = args.userId;
                Quote.update(whereObj, {where: {id: args.id}});
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: MutationType,
});