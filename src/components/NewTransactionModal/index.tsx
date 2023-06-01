import Modal from 'react-modal';
import { Container } from './styles';

import logoImg from '../../assets/Entradas.svg';
import closeImg from '../../assets/Fechar-butao.svg';




interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactionModalProps){
    
    return (
            <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"                
                className="react-modal-content"
            >

                <button className='react-modal-close' type='button' onClick={onRequestClose}>
                    <img src={closeImg}></img>
                </button>

                <Container>
                <h2>Cadastrar Nova Transação</h2>
                 
                    <input type='name' placeholder='Título/Tipo da Transação'></input>
                    <input type="number" placeholder='Valor' name="Valor" id="" />

                    <button className='Entrada' type="submit" placeholder='Entrada' >Entrada</button>
                    <button className='Saida' type="submit" placeholder='Saída'>Saída</button>
                    
                    
                    
                    
                    
                    
                    <input type="date" placeholder='data' name="Data" id="" />
                    
                    <button className='Cadastrar' type="submit" placeholder='Cadastrar'>Cadastrar</button>
                    
                
                </Container>
            </Modal>
        
    );
}