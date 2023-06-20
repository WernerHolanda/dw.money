//1ª importações js en cima
import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';

//2ª importações img
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import closeImg from '../../assets/Fechar-butao.svg';

//3ª importações estilo
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
} 

export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactionModalProps){
    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit'); //significa que o estado do botão por padrão já irá vir como deposit - ou seja, o verde.


//aqui embaixo: faz o cadastrado de uma nova transação chamada api.
// async é pra transformar em assincrona .'. 
//event o formato dele é FormEvent
    async function handleCreatNewTransaction (event: FormEvent){
        event.preventDefault();//isso é para previnir o funcionamento padrão do html, ou seja, não apagar ou enviar os dados quando se está escrevendo um formulário
       
        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();

       // api.post('/transactions', data)
    };

        // await é aguardar que só irá fechar a pagina de cadastra r uma nova transacao se esperar primeiro que o formul´´ario seja respondido corretamente.  

    return (
            <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"                
                className="react-modal-content"
            >

                <button 
                    type="button"
                    className='react-modal-close' 
                    onClick={onRequestClose}
                    >

                    <img src={closeImg} alt='botao-fechar' />
                </button>

                <Container onSubmit={handleCreatNewTransaction}>
                    
                    <h2>Cadastrar Nova Transação</h2>
                 
                    <input                                      
                        placeholder='Título/Tipo da Transação'
                        value={title}
                        //aqui basicam. salvará o novo valor digitado aqui dentro desse input 
                        onChange={event => setTitle(event.target.value)}
                        />
                    <input 
                        type="number" 
                        placeholder='Valor' name="Valor"
                        value={amount}
                        onChange={event => setAmount(Number(event.target.value))} 
                        /> 

                       
                    <TransactionTypeContainer /*É um container, estilo uma div, pois o objetivo aqui é criar esse container novo, para conseguir estilizar apenas esses botões.*/
                    > 
                        <RadioBox //aqui era um <button>, mas eu criei um compenente chamdo de radiobox, para diferenciar dos demais buttons, pois somente este será do tipo caixa de clicar e ficar clicado como withdraw ou deposit, e todo componente tem propriedades, estas que eu posso criar
                        //ou que eu posso usar as palavras de propriedadess que já existem
                            //className='Entrada'
                            type="button"
                            onClick={() => { setType('deposit'); }}    
                            isactive={ type === 'deposit'}
                            activecolor='green'
                            >
                            <img src={incomeImg} alt="Entrada" />    
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox
                            type="button"
                            onClick={() => { setType('withdraw'); }} 
                            //o isactive abaixo irá retornar true se for withdraw ou false se for deposit.
                            isactive={ type === 'withdraw'} 
                            activecolor='red'
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

            
                    <button 
                    className='Cadastrar' 
                    type='submit' 
                    placeholder='Cadastrar'
                    >Cadastrar</button>
                    
                
                </Container>
            </Modal>
        
    );
}