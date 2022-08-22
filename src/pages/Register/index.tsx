import { Section, Div, DivContainer, Form, Title, Input, Label, ButtonNegative,  Img,  ButtonBlack, ParagraphQuestion, Select} from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import logo  from "../../assets/logo.svg"
import { motion } from "framer-motion"
import { formSchema } from "../../validators/userRegister"
import { useContext } from "react";
import { Context } from "../../context/userContext"
import { useNavigate } from "react-router-dom";

interface UserDataRegister {
    email: string;
    password: string;
    confirmPassword?: string;
    name: string;
    bio: string;
    contact: string | number;
    course_module: string;
  }

function Register() {
    const { registerUser }  = useContext(Context);
    const navigate = useNavigate()

      const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm<UserDataRegister>({
        resolver: yupResolver(formSchema)
    });

        return (
            <>
            {registerUser ? 
                
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{ opacity:0 }}
                transition={{ duration: 0.5 }}
                >
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
                </motion.div>
            :
                <>
                </>
            }
            </>
        )
    
}

export default Register