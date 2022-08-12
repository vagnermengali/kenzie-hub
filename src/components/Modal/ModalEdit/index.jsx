import { Section, Div, DivTop, Form, Title, ButtonExit, Input, Label, ButtonPink, Select, ButtonGrey, DivButton } from "./style"
import { formSchema } from "../../../validators/editModal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BsXLg } from "react-icons/bs";
import "./style"
import { useContext } from "react";
import { Context } from "../../../context/userContext";

function ModalEdit() {
    const { tech, editTech, dropDownEdit, closeDropdownEdit ,deleteTech} = useContext(Context)
        const {
            register,
            handleSubmit,
            formState: { errors }
            } = useForm({
            resolver: yupResolver(formSchema),
            defaultValues: { status: tech?.status
            }
        });
        console.log(tech.status)
    return (
        
        <Section dropdown={dropDownEdit}>
        <Div>
            <DivTop>
                <Title>Tecnologia Detalhes</Title>
                <ButtonExit onClick={closeDropdownEdit}><BsXLg /></ButtonExit>
            </DivTop>
            <Form>
                <Label htmlFor="">Nome do projeto<span>{errors.title?.message}</span></Label>
                <Input type="text" value={tech?.title} disabled />
                <Label htmlFor="">Status<span>{errors.status?.message}</span></Label>
                <Select {...register("status")} >
                    <option></option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>
                <DivButton>
                    <ButtonPink type="submit" onClick={handleSubmit(editTech)}>Salvar alterações</ButtonPink>
                    <ButtonGrey type="button" onClick={deleteTech}>Excluir</ButtonGrey>
                </DivButton>
            </Form>
            
        </Div>
        </Section>
    )
}

export default ModalEdit