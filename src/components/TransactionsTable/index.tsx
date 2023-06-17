import { useContext } from "react";
import { Container } from './styles';
import { TransactionsContext } from "../../TransactionsContext";



//pois é obrigatório dizer quais são as propriedades da "Transaction", fazemos isso entao por essa interface.


export function TransactionsTable (){
    const transactions = useContext(TransactionsContext);
    
    /*const [transactions, setTransactions] = useState<Transaction[]>([]);
    // '<Transaction[]>' significa que eu puxo exatamente a interface, .'., o estado Transaction, que eu armazeno uma array '[]' e isso de colocar '[]' é para que eu não armazene apenas 1x transactions., mas sim várias transactions., 
    //aqui é um estado que eu criei. .'., listar na api, salvar um estado, e isso irá ficar se repetindo
    // como eu tenho um estado que será alterado, eu posso agora citar ele lá embaixo, por meio de 'transaction.map'
    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))//os 'response.data.transactions' esses nome.nome2.nome3 essa sequencia com pontos é para espécificar 
    }, []); */
    
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
                                >{new Intl.NumberFormat('pt-BR',/* */  {
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