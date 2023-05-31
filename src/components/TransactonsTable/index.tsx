import { Container } from "./styles";


export function TransactionsTable (){
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
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 12.000</td>    
                        <td>Desenvolvilmento</td>
                        <td>20/02/2023</td>
                    </tr>

                    <tr>
                        <td>Venc Fatura do Cartão 05/23</td>
                        <td className="withdraw">R$ -5.000</td>    
                        <td>Desenvolvilmento</td>
                        <td>20/02/2023</td>
                    </tr>

                    <tr>
                        <td>Receb. Alguel </td>
                        <td className="deposit">R$ 2.200</td>    
                        <td>Desenvolvilmento</td>
                        <td>20/02/2023</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
} 