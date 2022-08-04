import { HeaderContainer, Nav, Img, Button, Div, TitleName, Paragraph} from "./style"
import logo from "../../../assets/logo.svg"
import "./style"

function Header() {

    return (
        <HeaderContainer>
            <Nav>
                <Img src={logo} alt="logo"/>
                <Button>Sair</Button>
            </Nav>
            <Div>
                <TitleName>Olá, Samuel Leão</TitleName>
                <Paragraph>Primeiro módulo (Introdução ao Frontend)</Paragraph>
            </Div>
        </HeaderContainer >

    )
}

export default Header