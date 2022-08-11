import React, {Component} from "react"
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`



  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body{
    margin: 0 auto;
    background-color: green;
  }

  

`;



export default class App extends Component{
  render(){
    return(
      <section>
        <GlobalStyle />
        <Header subt="Entregando trabalho de Props" />
        <Main nome="Helio Junior" idade={34} />
        <Footer></Footer>
      </section>
    );
  }
}