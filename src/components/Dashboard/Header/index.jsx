import { HeaderContainer, Nav, Img, Button, Div, TitleName, Paragraph} from "./style"
import { useNavigate } from 'react-router-dom'
import logo from "../../../assets/logo.svg"
import "./style"

function Header() {
    const navigate = useNavigate()
    
    const user = JSON.parse(window.localStorage.getItem("authUser"))
   
        return (
            <HeaderContainer>
                <Nav>
                    <Img src={logo} alt="logo"/>
                    <Button onClick={() => {
                        window.localStorage.clear()
                        navigate("/")
                    }}>Sair</Button>
                </Nav>
                <Div>
                    <TitleName>Olá {user.name}</TitleName>
                    <Paragraph>{user.course_module}</Paragraph>
                </Div>
            </HeaderContainer >
            )
}

export default Header