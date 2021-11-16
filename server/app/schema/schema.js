const graphql = require('graphql');
const db = require('../models');
const Quote = db.quotes;
const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLInt},
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
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQueryType
});