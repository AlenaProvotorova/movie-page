import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

export const Header = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background-image: linear-gradient(-45deg, #d754ab, #fd723a);
height: 45vh;
color: white;
`

export const Title = styled.h1`
font-size: 60px;
font-weight: 600;
margin-bottom: 20px;
`

export const SubTitle = styled.h3`
font-size: 35px;
`

export const Loading = styled.div`
font-size: 18px;
font-weight: 500;
margin-top: 10px;
opacity: 0.5;
`

export const CardWrapper = styled.div`
display: grid;
grid-gap: 20px 40px;
grid-template-columns: repeat(4, 1fr);
margin: auto;
width: 70%;
position: relative;
top: -50px
`

export const Poster = styled.div`
background-image: url(${props => props.bg  });
flex-direction: column;
align-items: center;
width: 100%;
display: flex;
height: 200px;
border-radius: 8px;
overflow: hidden;
position: relative
`

export const TitleText = styled.div`
width: 100%;
text-align: center;
text-decoration: none;
color: black;
font-size: 24px;
font-weight: 600;
padding-top: 20px;
`

export const DetailsBody = styled.div`
align-items: center;
width: 90%;
margin: auto;
display: flex;
position: relative;
top: -50px;
`

export const Description = styled.div`
display: flex;
flex: 2;
padding-right: 50px;
font-size: 20px;
`

export const SubText = styled.div`
font-size: 18px;
`

export const DetailsPoster = styled.div`
display: flex;
flex: 1;
background-image: url(${props => props.bg});
height: 500px;
border-radius: 8px;
overflow: hidden;
position: relative;
top: -50px;
background-size: cover;
background-repeat: no-repeat;
`
export const Suggestions = styled.div`
width: 100%;
background-image: linear-gradient(-45deg, #d754ab, #fd723a);
color: white;
position: relative;
top: -50px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 30px;
padding: 20px;
margin-bottom: 20px;
`

export const PosterWrapper = styled.div`
position: relative;
`

export const Like = styled.button`
position: absolute;
top: 10px;
left: 10px;
z-index: 10
`
