const graphql = require('graphql');
const { Quote, User }  = require('../models');

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLInt},
        user: {
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
        quotes: {
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
        user: {
            type: UserType,
            // only allow id as arg
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log({success: `great! ${args.id}`});
                return User.findOne({where: {id: args.id}});
            }        
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQueryType
});