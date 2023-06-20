
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

import { Container } from './styles'
import { useTransactions } from '../../hooks/useTransactions'
 
export function Summary (){
    const { transactions }= useTransactions();//aqui é um hook do react para consumir os datos de um contexto. No caso aqui é pra consumir os dados do Transactionscontext.ts
    // o reduce é .....
    const summary = transactions.reduce((acc, transaction) => {
        // .'. se a transação for do tipo deposito, então 
        if(transaction.type === 'deposit') 
        //pegue o accumlator dos deposits em geral e some o amount da transação especifica
        {    
        acc.deposits += transaction.amount;   
        acc.total += transaction.amount;
        }

        else { 
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, 
        {/*aqui é um objeto*, que poderá ter 2 valores*/ 
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt='Entradas'></img>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',/* currency aqui é pra colocar a moeda, q no nosso caso é a brasileira */
                    currency: 'BRL' /* logo isso coloca o R$ no preço*/
                    }).format(summary.deposits)}
                    </strong>
            </div>
        
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt='Saídas'></img>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',/* currency aqui é pra colocar a moeda, q no nosso caso é a brasileira */
                    currency: 'BRL' /* logo isso coloca o R$ no preço*/
                    }).format(summary.withdraws)}
                    </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt='Total'></img>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',/* currency aqui é pra colocar a moeda, q no nosso caso é a brasileira */
                    currency: 'BRL' /* logo isso coloca o R$ no preço*/
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
        )
};