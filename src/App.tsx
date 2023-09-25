import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';

import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

import { Dashboard } from './components/Dashboard';
import { TransactionsProvider } from './hooks/useTransactions';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`;

Modal.setAppElement ('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);//o modal vem como padrão fechado=false;


  function handleOpenNewTransactionModal() { // handle é uma função que o professor usa como padrão na vida dele p quando é uma função a ser executada pelo usuário
    setIsNewTransactionModalOpen(true); //aqui diz que a função irá "setar" que a função modal está aberto = true
  }


  function handleCloseNewTransactionModal() { 
    setIsNewTransactionModalOpen(false); //aqui diz que a função irá "setar" que a função modal está fechar = false
  }

  return (
    <TransactionsProvider> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle /> 
    </TransactionsProvider>

  ); 
}

export default App;
