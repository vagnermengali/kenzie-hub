import { Section, Div, DivTop, Form, Title, ButtonExit, Input, Label, ButtonPink, Select } from "./style"
import { formSchema } from "../../../validators/registerModal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BsXLg } from "react-icons/bs";
import "./style"
import { useContext } from "react";
import { Context } from "../../../context/userContext";

interface Techs {
    title: string;
    status: string;
    id?: string;
  }

function ModalRegister() {
    const { registerTech, dropDownRegister, setDropdownRegister} = useContext(Context)

    const closeDropdownRegister = () => {
        setDropdownRegister("none");
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm<Techs>({
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
                <Label htmlFor="text">Selecionar status<span> {errors.status?.message}</span></Label>
                <Select {...register("status")}>
                    <option></option>
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