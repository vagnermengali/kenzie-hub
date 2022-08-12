import { Section, Div, DivTop, Form, Title, ButtonExit, Input, Label, ButtonPink, Select } from "./style"
import { formSchema } from "../../../validators/editModal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BsXLg } from "react-icons/bs";
import "./style"
import { useContext } from "react";
import { Context } from "../../../context/userContext";

function ModalRegister() {
    const { registerTech, closeDropdownRegister, dropDownRegister} = useContext(Context)

    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(formSchema)
    });

    return (
        
        <Section dropdown={dropDownRegister}>
        <Div>
            <DivTop>
                <Title>Cadastrar Tecnologia</Title>
                <ButtonExit onClick={closeDropdownRegister}><BsXLg /></ButtonExit>
            </DivTop>
            
            <Form onSubmit={handleSubmit(registerTech)}>
                <Label htmlFor="text">Nome<span>{errors.title?.message}</span></Label>
                <Input type="text" placeholder="Digite um nome" {...register("title")}/>
                <Label htmlFor="text">Selecionar status<span>{errors.status?.message}</span></Label>
                <Select {...register("status")}>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                </Select>
                <ButtonPink type="submit">Cadastrar Tecnologia</ButtonPink>
            </Form>
        </Div>
        </Section> 
    )
}

export default ModalRegister