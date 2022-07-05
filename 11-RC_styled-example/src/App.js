import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors:{
    header:'#fff',
    body: '#fff',
    footer: '#8a1c4a'

  }
}


const App = () => {
  return(
  
  <ThemeProvider theme={theme}>
    <Header/>
  </ThemeProvider>
 
  ) 
  
};

export default App;
