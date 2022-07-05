import Button, { TomatoButton } from "./Button.styled";
import Container from "./Container.styled";
import HeaderText from "./Header.style";
import StyledLink from "./Link.styled";

const App = () => {
  return (
    
      <Container bg='green'>
      <HeaderText>STYLED COMPONENTS</HeaderText>
      <Button primary>Click</Button>
      <Button>CLİCK</Button>
      <TomatoButton>Click</TomatoButton>
      <TomatoButton primary>Click</TomatoButton>
      <HeaderText color='white'>STYLED COMPONENTS</HeaderText>
      <StyledLink href='https://clarusway.com/' target='_blank'>Clarusway</StyledLink>
      </Container>
    
  )
};

export default App;
