import Modal from 'react-modal';
import { Container } from './styles';




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
                <Container>
                <h2>Cadastrar Nova Transação</h2>
                 
                    <input type='name' placeholder='Título'></input>
                    <input type="number" placeholder='Valor' name="Valor" id="" />
                    <input type="date" placeholder='Categoria' name="Data" id="" />
                    <button type="submit" placeholder='Cadastrar'>Cadastrar</button>
                
                
                </Container>
            </Modal>
        
    );
}