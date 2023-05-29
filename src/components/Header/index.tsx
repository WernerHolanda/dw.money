import { Container, Content } from './style'
import logoImg from '../../assets/Logo.svg'

export function Header (){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo-dt-money" />
        
                <button type="button">Nova Transação
                </button>
            </Content>
        </Container>
    )
}