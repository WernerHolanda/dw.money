import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';

import closeImg from '../../assets/Fechar-butao.svg';
import { useState } from 'react';




interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactionModalProps){
    const [type, setType] = useState('deposit');


    return (
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"                
                className="react-modal-content"
            >

                <button 
                    className='react-modal-close' 
                    type='button' 
                    onClick={onRequestClose}>
                    <img src={closeImg}></img>
                </button>

                <Container>
                <h2>Cadastrar Nova Transação</h2>
                 
                    <input type='name' placeholder='Título/Tipo da Transação'></input>
                    <input type="number" placeholder='Valor' name="Valor" id="" />

                    <TransactionTypeContainer>
                        <RadioBox //radiobox é um componente que eu criei, e todo componente tem propriedades, estas que eu posso criar
                        //ou que eu posso usar as palavras de propriedadess que já existem
                            className='Entrada'
                            type="button"
                            onClick={() => { setType('deposit'); }}    
                            isActive={type === 'deposit'}
                            activeColor='green'
                            >
                            <img src={incomeImg} alt="Entrada" />    
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox
                            className='Saida'
                            type="button"
                            onClick={() => { setType('withdraw'); }} 
                            isActive={ type === 'withdraw'} 
                            activeColor='red'
                        >
                            <img src={outcomeImg} alt="Saída" />    
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="date" placeholder='data' name="Data" id="" />
                    
                    <button className='Cadastrar' type="submit" placeholder='Cadastrar'>Cadastrar</button>
                    
                
                </Container>
            </Modal>
        
    );
}