import { Section, Div, DivTop, Form, Title, ButtonExit, Input, Label, ButtonPink, Select, ButtonGrey, DivButton } from "./style"
import { BsXLg } from "react-icons/bs";
import "./style"

function ModalEdit() {

    return (
        <Section>
        <Div>
            <DivTop>
                <Title>Tecnologia Detalhes</Title>
                <ButtonExit><BsXLg /></ButtonExit>
            </DivTop>
            <Form>
                <Label htmlFor="">Nome do projeto</Label>
                <Input placeholder="Material UI"/>
                <Label htmlFor="">Status</Label>
                <Select>
                    <option>Iniciante</option>
                    <option>fewe</option>
                    <option>fewe</option>
                </Select>
                <DivButton>
                    <ButtonPink type="submit">Salvar alterações</ButtonPink>
                    <ButtonGrey type="submit">Excluir</ButtonGrey>
                </DivButton>

            </Form>
        </Div>
        </Section>
    )
}

export default ModalEdit