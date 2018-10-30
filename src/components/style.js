import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:0 auto;
width:100%;
max-width:1200px;
//border:1px dotted red;
`;

export const HeadNav = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center
width:100%;
//max-width:1200px;
height:75px;
margin:0 auto;
background-color:black;
position:fixed;
z-index:100;
//border:1px solid yellow;
`;

export const Nav = styled.nav`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
max-width:1200px;
// border:1px solid red;
`;

export const NavMenu = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:8%;
`
export const Video = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
max-width:224px;
height:180px;
margin-top:15px;
background-image: linear-gradient(179deg, transparent, #000);
border:1px solid rgba(255,255,255,0.1);
`
export const Wrapper = styled.div`
display:flex;
margin-top:40px;
flex-flow:row wrap;
justify-content:space-evenly;
align-items:center;
width:100%;
`

export const Poster =styled.img`
width:100%;
height:120px;
max-width:224px;
cursor:pointer;
`

export const Songinfo =styled.div`
display:flex;
flex-direction: column;
justify-content:flex-start;
width:100%;
font-family: 'Roboto', sans-serif;
color: #fff;
font-size: 10px;
font-weight: 300;
letter-spacing: 1px;
text-transform:uppercase;
position:relative;
top:10px;
margin-left:1.2rem;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
line-height:1.2;
`