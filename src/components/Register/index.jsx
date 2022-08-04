import { Section, Div, DivContainer, Form, Title, Input, Label, ButtonNegative, Img, ButtonBlack, ParagraphQuestion, Select} from "./style"
import "./style"

import logo  from "../../assets/logo.svg"
function Register() {

    return (
        <Section>
        <DivContainer>
            <Div>
                <Img src={logo} alt=""/>
                <ButtonBlack>Voltar</ButtonBlack> 
            </Div>
            <Form>
                <Title>Crie sua conta</Title>
                <ParagraphQuestion>Rapido e grátis, vamos nessa</ParagraphQuestion>
                <Label htmlFor="">Nome</Label>
                <Input placeholder="Digite aqui seu nome"/>
                <Label htmlFor="">Email</Label>
                <Input placeholder="Digite aqui seu email"/>
                <Label htmlFor="">Senha</Label>
                <Input placeholder="Digite aqui sua senha"/>
                <Label htmlFor="">Confirme senha</Label>
                <Input placeholder="Confirme novamente sua senha"/>
                <Label htmlFor="">Bio</Label>
                <Input placeholder="Fale sobre você"/>
                <Label htmlFor="">Contato</Label>
                <Input placeholder="Opção de contato"/>
                <Label htmlFor="">Selecione módulo</Label>
                <Select>
                    <option>fewe</option>
                    <option>fewe</option>
                    <option>fewe</option>
                </Select>
                <ButtonNegative>Cadastre-se</ButtonNegative>
            </Form>
        </DivContainer>
        </Section>
    )
}

export default Register