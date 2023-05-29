import styled from 'styled-components'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle /> 
    </>
    //<br></br>
    //<div className="App">
      //<h1>Hello Word do h1</h1>
      //<GlobalStyle />
      

      //<Title>
        //Hello Word - Title 
        //<button>Botão-teste</button>
      //</Title>
    //</div>
  ); 
}

export default App;
