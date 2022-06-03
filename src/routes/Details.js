import {useParams} from "react-router-dom"
import {gql, useQuery} from '@apollo/client'
import {Container, Header, Title, Loading, DetailsBody, Description,
     DetailsPoster, SubText, Suggestions, CardWrapper} from '../styled-components/styled-components'
import Movie from "../components/movie"

const GET_MOVIE = gql`
    query getMovie($id: Int! ){
        movie(id: $id ) {
            rating
            language
            title
            medium_cover_image
            description_intro
         }
        suggestions(id: $id ) {
            id
            title
            medium_cover_image
         }
    }
`

const Details =() => {
    const {id} = useParams()
    const {loading, data} = useQuery(GET_MOVIE, {
        variables: { id }
    })

    return (
        <Container>
            <Header>
                <Title>
                    {loading 
                     ? (<Loading>Loading..</Loading>)
                     : (
                         <>
                         <div>{data?.movie.title}</div>
                         <SubText>{data?.movie.language} ● {data?.movie.rating}</SubText>
                         </>
                        )}
                </Title>
            </Header>
            <DetailsBody>
                <Description>{data?.movie.description_intro}</Description>
                <DetailsPoster bg={data?.movie.medium_cover_image}></DetailsPoster>
            </DetailsBody>
            <Suggestions>
               Рекомендации
            </Suggestions>
            <CardWrapper>
                {data?.suggestions?.map(m => <Movie key={m.id} id={m.id} img={m.medium_cover_image} title={m.title}/>)}
            </CardWrapper>
        </Container>
    )
}

export default Details