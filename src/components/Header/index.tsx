import { HeaderContainer, Nav, Img, Button, Div, TitleName, Paragraph} from "./style"
import logo from "../../assets/logo.svg"
import "./style"
import { useContext } from "react"
import { Context } from "../../context/userContext"
import { useNavigate } from "react-router-dom";

function Header() {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    
        return (
            <HeaderContainer>
                <Nav>
                     <Img src={logo} alt=""/>
                    <Button onClick={() => {
                        window.localStorage.clear()
                        navigate("/")
                    }}>Sair</Button>
                </Nav>
                <Div>
                    <TitleName>Olá, {user.name}</TitleName>
                    <Paragraph>{user.course_module}</Paragraph>
                </Div>
            </HeaderContainer >
            )
}

export default Header