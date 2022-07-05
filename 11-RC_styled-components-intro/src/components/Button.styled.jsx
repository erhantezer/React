import styled from 'styled-components';

const Button = styled.button`
color: hotpink;
background: ${(props)=> (props.primary ? 'purple': 'white')};
/* background: ${({primary})=> (primary ? 'green': 'white')}; */
cursor: pointer;
width: 5rem;
padding: 0.7rem;
border-radius: 0.7rem;
border: 3px solid pink;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
&:hover{
    transform: scale(0.9);
}
`;
export const TomatoButton = styled(Button)`
  color: ${({ primary }) => (primary ? 'white' : 'tomato')};
  background: ${({ primary }) => (primary ? 'tomato' : 'white')};
  border: 2px solid tomato;
`;
export default Button;

