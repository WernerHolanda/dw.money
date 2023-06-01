import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'
import { Container } from './styles'

export function Summary (){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt='Entradas'></img>
                </header>
                <strong> R$ +6.000,00</strong>
            </div>
        
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt='Saídas'></img>
                </header>
                <strong> R$ -3.500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt='Total'></img>
                </header>
                <strong> R$ +2.500,00</strong>
            </div>
        </Container>
        )
};