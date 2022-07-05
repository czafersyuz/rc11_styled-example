import { ThemeProvider } from "styled-components";
import { GlobalStlyes } from "./components/styles/Global";
import Header from "./components/styles/Header";

const theme ={
  colors:{
    header:"#fff",
    body:"#fff",
    footer:"#8a1c4a",
  },
  responsive: "768px",
}

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <Header/>
    <GlobalStlyes/>

  </ThemeProvider>
  
  
  )
};

export default App;
