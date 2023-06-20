
import { Container } from './styles';

import { useTransactions } from '../../hooks/useTransactions';



//pois é obrigatório dizer quais são as propriedades da "Transaction", fazemos isso entao por essa interface.


export function TransactionsTable (){
    //já o useState significa 'salvar no estado o que eu busquei na api'
    //useEffect significa 'buscar na api'
   
    const { transactions }= useTransactions() 
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>    
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
            
                <tbody>
                    {transactions.map(transaction => (
                            <tr /* pois sempre o primeiro elemento de uma 'map' tem que ser uma key, com informação unica. no caso é a 'id'.*/ 
                            key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}/*pois aqui eu estou chamando o tipo de transação, se é depoist ou withdraw*/
                                >{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',/* currency aqui é pra colocar a moeda, q no nosso caso é a brasileira */
                                    currency: 'BRL' /* logo isso coloca o R$ no preço*/
                                    }).format(transaction.amount)}
                                </td>    
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)/* aqui teve que colocar dentro do () um new date(transaction.createdAt) pois dentro do parentese so aceita string q é o padrão da API, logo o 'new...' converte em uma data*/
                                    )}
                                </td>
                            </tr>
                        ))}
                  
                </tbody>
            </table>
        </Container>
    );
} 