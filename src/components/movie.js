import {Link} from 'react-router-dom'
import {gql, useMutation} from '@apollo/client'

import {Poster, TitleText, Like, PosterWrapper} from '../styled-components/styled-components'

const LIKE_MOVIE = gql`
mutation toggleMovie($id: Int!, $isLiked: Boolean!) {
 toggleMovie(id: $id, isLiked: $isLiked) @client 
}
`

const Movie = ({id, img, title, isMainPage, isLiked}) => {
    const [toggleMovie] = useMutation(LIKE_MOVIE, {
        variables: {id, isLiked }
    })

    return (
        <PosterWrapper> 
        <Link to={`/${id}`}>
            <Poster bg={img} title={title}/>
            <TitleText>{isMainPage && title}</TitleText>
        </Link>
            {isMainPage && (<Like onClick={toggleMovie}>{isLiked ? 'Like' : 'Dislike'}</Like>)}
        </PosterWrapper>
    )
}

export default Movie