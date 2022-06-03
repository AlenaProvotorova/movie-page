import {gql, useQuery} from '@apollo/client'
import Movie from '../components/movie'
import {Container, Header, Title, SubTitle, Loading, CardWrapper} from '../styled-components/styled-components'

// @client show that we get stage on client
const GET_MOVIES = gql`
    query {
        movies {
            id
            title
            medium_cover_image
            isLiked @client
        }
    }
`

const Home =() => {
    const {loading, data} = useQuery(GET_MOVIES)
    return (
        <Container>
            <Header>
                <Title>Apollo 2022</Title>
                <SubTitle>База фильмов на React, Apollo, GraphQL</SubTitle>
            </Header>
           {loading 
            ? (<Loading>Loading..</Loading>)
            : (
            <CardWrapper>
                {data?.movies?.map(m => (
                <Movie 
                key={m.id} 
                id={m.id} 
                img={m.medium_cover_image} 
                isMainPage 
                title={m.title}
                isLiked={m.isLiked}
                />))}
            </CardWrapper>
            )}
        </Container>
    )
}

export default Home