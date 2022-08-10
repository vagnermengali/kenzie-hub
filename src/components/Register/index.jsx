import { Section, Div, DivContainer, Form, Title, Input, Label, ButtonNegative, Img, ButtonBlack, ParagraphQuestion, Select} from "./style"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import logo  from "../../assets/logo.svg"
import { motion } from "framer-motion"
import { useContext } from "react";
import { Context } from "../../context/userContext"
import "./style"

function Register() {
    const { registerUser, navigate} = useContext(Context);
    const formSchema = yup.object().shape({
        name: yup.string()
        .required("Campo obrigatório")
        .min(3, "A senha deve ter pelo menos 3 caracteres")
        .matches(("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\\s]+$"),"O nome deve conter apenas letras."),

        email: yup.string()
        .required("Campo obrigatório")
        .email("E-mail inválido")
        .matches(("^[a-z0-9\\_.]+@[a-z]+.([a-z]+)$"),"Verifique seu e-mail"),

        password: yup.string()
        .required("Campo obrigatório")
        .min(8, "A senha deve conter pelo menos 8 caracteres")
        .max(30, "A senha deve conter no máximo 30 caracteres")
        .matches(("^(?=.*[A-Z])(?=.*[!#@$%&\\.])(?=.*[0-9])(?=.*[a-z]).{8,30}$"),"A senha deve conter deve conter letras minúsculas e maiúsculas, números e carácteres especais(!#@$%&.)"),

        confirmPassword: yup.string()
        .required("Campo obrigatório")
        .oneOf([yup.ref('password'), null],"As senhas não correspondem"),

        bio: yup.string().required("Campo obrigatório")
        .min(5, "Deve ter no minímo de 5 caracteres")
        .max(30, "O nome deve ter mais de 30 caracteres"),

        contact: yup.string()
        .required("Campo obrigatório"),

        course_module: yup.string()
        .required("Campo obrigatório"),
      });

      const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(formSchema)
    });

    if(registerUser) {

        return (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{ opacity:0 }}
            transition={{ duration: 0.5 }}
            >
            <>
            <Section>
            <DivContainer>
                <Div>
                    <Img src={logo} alt=""/>
                    <ButtonBlack onClick={() => navigate("/")}>Voltar</ButtonBlack> 
                </Div>
                <Form onSubmit={handleSubmit(registerUser)}>
                    <Title>Crie sua conta</Title>
                    <ParagraphQuestion>Rapido e grátis, vamos nessa</ParagraphQuestion>
                    <Label htmlFor="text">Nome<span>{errors.name?.message}</span></Label>
                    <Input type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                    <Label htmlFor="email">Email<span>{errors.email?.message}</span></Label>
                    <Input type="email" placeholder="Digite aqui seu email" {...register("email")}/>
                    <Label htmlFor="password">Senha<span>{errors.password?.message}</span></Label>
                    <Input type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                    <Label htmlFor="password">Confirme senha<span>{errors.confirmPassword?.message}</span></Label>
                    <Input type="password" placeholder="Confirme novamente sua senha" {...register("confirmPassword")}/>
                    <Label htmlFor="text">Bio<span>{errors.bio?.message}</span></Label>
                    <Input type="text" placeholder="Fale sobre você" {...register("bio")}/>
                    <Label htmlFor="text">Contato<span>{errors.contact?.message}</span></Label>
                    <Input type="text" placeholder="Opção de contato" {...register("contact")}/>
                    <Label htmlFor="text">Selecione módulo<span>{errors.course_module?.message}</span></Label>
                    <Select {...register("course_module")}>
                        <option></option>
                        <option>Primeiro módulo (Introdução ao Frontend)</option>
                        <option>Segundo módulo (Frontend Avançado)</option>
                        <option>Terceiro módulo (Introdução ao Backend)</option>
                        <option>Quarto módulo (Backend Avançado)</option>
                    </Select>

                    <ButtonNegative type="submit">Cadastre-se</ButtonNegative>
                </Form>
            </DivContainer>
            </Section>
            </>
            </motion.div>
        )
    }
}

export default Register