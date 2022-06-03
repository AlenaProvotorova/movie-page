import {ApolloClient, InMemoryCache,} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://easycoders-movies.herokuapp.com',
    cache: new InMemoryCache(),
    //change local stage 
    resolvers: {
      Movie: {
        isLiked: () => false 
      },
      Mutation: {
        toggleMovie: (_, {id, isLiked}, {cache}) => {
          cache.modify({id: `Movie:${id}`, fields:{
            isLiked: (isLiked) => !isLiked
          }})
        }
      }
    }
  });

  export default client