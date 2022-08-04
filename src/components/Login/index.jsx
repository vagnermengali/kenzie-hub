import { Section, Div, Form, Title, Input, Label, ButtonGrey, ButtonPink, ParagraphQuestion, Img, DivRegister} from "./style"
import logo  from "../../assets/logo.svg"
import "./style"

function Login() {

    return (
        <Section>
        <Div>
            <Img src={logo} alt=""/>
            <Form>
                <Title>Login</Title>
                <Label htmlFor="">Email</Label>
                <Input placeholder="Digite seu email"/>
                <Label htmlFor="">Senha</Label>
                <Input placeholder="Digite seu email"/>
                <ButtonPink type="submit">Entrar</ButtonPink>
            </Form>
            <DivRegister>
                <ParagraphQuestion>Ainda não possui conta?</ParagraphQuestion>
                <ButtonGrey>Cadastre-se</ButtonGrey> 
            </DivRegister>

        </Div>
        </Section>
    )
}

export default Login