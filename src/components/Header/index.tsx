import { useState } from 'react';
import Modal from 'react-modal'; 
import logoImg from '../../assets/Logo.svg';

import { Container, Content } from './styles';

// a inferface irá definir as propriedades do que eu quero definir - no caso é o HeaderProps - 
// o professor diz que começa com "on" meio como um padrão quando está recebendo uma funação - 
//Essa função "onOpenNewTransactionModal: recebe (parametro nenhum) => vazio=void;

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

// onOpenNewTransactionModal abaixo significa dizer que o Header está recebendo uma propriedade específica -desestruturar -  do HeaderProps; e ele repassa essa propriedade para o button
export function Header ({ onOpenNewTransactionModal } : HeaderProps){
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo-dt-money" />
        
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação 
                </button> 

                
            </Content>
        </Container>
    )
}