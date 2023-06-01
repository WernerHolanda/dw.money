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
                        <td>Recb. Salário - Set/23</td>
                        <td className="deposit">R$ 6.000</td>    
                        <td>Salário</td>
                        <td>01/09/2023</td>
                    </tr>

                    <tr>
                        <td>Passagens Aéreas Barreirinhas-MA</td>
                        <td className="withdraw">R$ -1.500</td>    
                        <td>Compras</td>
                        <td>02/09/2023</td>
                    </tr>

                    <tr>
                        <td>Passeios. Barreirinhas-MA </td>
                        <td className="withdraw">R$ -600</td>    
                        <td>Compras</td>
                        <td>02/09/2023</td>
                    </tr>

                    <tr>
                        <td>Alimentação. Barreirinhas-MA </td>
                        <td className="withdraw">R$ -500</td>    
                        <td>Compras</td>
                        <td>02/09/2023</td>
                    </tr>
                    
                    
                    <tr>
                        <td>Hospedagem. Barreirinhas-MA </td>
                        <td className="withdraw">R$ -900</td>    
                        <td>Compras</td>
                        <td>02/09/2023</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
} 