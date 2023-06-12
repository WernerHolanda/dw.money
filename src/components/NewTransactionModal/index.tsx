import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';

import { api } from '../../services/api';

import closeImg from '../../assets/Fechar-butao.svg';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactionModalProps){
    
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('');
   
    const [type, setType] = useState('deposit'); //significa que o estado do botão por padrão já irá vir como deposit - ou seja, o verde



    function handleCreatNewTransaction (event: FormEvent){
        event.preventDefault();//isso é para previnir o funcionamento padrão do html, ou seja, não apagar ou enviar os dados quando se está escrevendo um formulário
        
        const data = {
            title,
            value,
            category,
            type,
        };

        /*console.log ({
            title,
            value,
            category,
            type,
        })*/

        api.post('/transactions', data)
    }

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

                <Container onSubmit={handleCreatNewTransaction}>
                    
                    <h2>Cadastrar Nova Transação</h2>
                 
                    <input                                      
                        placeholder='Título/Tipo da Transação'
                        value={title}
                        onChange={event => setTitle(event.target.value)}//aqui basicam. salvará o novo valor digitado dentro da propriedade "title"
                        />
                    <input 
                        type="number" 
                        placeholder='Valor' name="Valor"
                        value={value}
                        onChange={event => setValue(Number(event.target.value))} 
                        /> 
                       
                    <TransactionTypeContainer>
                        <RadioBox //radiobox é um componente que eu criei, e todo componente tem propriedades, estas que eu posso criar
                        //ou que eu posso usar as palavras de propriedadess que já existem
                            //className='Entrada'
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

                    <input 
                        placeholder='Categoria da Transação' 
                        value={category}
                        onChange={event => setCategory(event.target.value)} 
                        />

                    
                    
                    
                    <button className='Cadastrar' type="submit" placeholder='Cadastrar'>Cadastrar</button>
                    
                
                </Container>
            </Modal>
        
    );
}