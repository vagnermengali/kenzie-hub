import { Section, Div, DivTop, Form, Title, ButtonExit, Input, Label, ButtonPink, Select } from "./style"
import { BsXLg } from "react-icons/bs";
import "./style"

function ModalRegister() {

    return (
        <Section>
        <Div>
            <DivTop>
                <Title>Cadastrar Tecnologia</Title>
                <ButtonExit><BsXLg /></ButtonExit>
            </DivTop>
            
            <Form>
                <Label htmlFor="">Nome</Label>
                <Input placeholder="Digite um nome"/>
                <Label htmlFor="">Selecionar status</Label>
                <Select>
                    <option>Iniciante</option>
                    <option>fewe</option>
                    <option>fewe</option>
                </Select>
                <ButtonPink type="submit">Cadastrar Tecnologia</ButtonPink>
            </Form>
        </Div>
        </Section>
    )
}

export default ModalRegister