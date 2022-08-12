import { Section, Div, Form, Title, Input, Label, ButtonPink, Img,ButtonBlack,DivHeader } from "./style"
import 'react-toastify/dist/ReactToastify.css';
import { formSchema } from "../../validators/userLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import logo  from "../../assets/logo.svg"
import { motion } from "framer-motion"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../context/userContext";
import "./style"

function Login() {
    const { eyeClick, LoginUser, handleClick, navigate} = useContext(Context)

        const {
            register,
            handleSubmit,
            formState: { errors }
            } = useForm({
            resolver: yupResolver(formSchema)
        });
    
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity:0 }}
        transition={{ duration: 0.5}}
        >
        <>
        
        <Section>       
        <Div>
            <DivHeader>
                <Img src={logo} alt=""/>
                <ButtonBlack onClick={() => navigate("/")}>Voltar</ButtonBlack> 
            </DivHeader>
            <Form onSubmit={handleSubmit(LoginUser)}>
                <Title>Login</Title>
                <Label htmlFor="email">Email<span>{errors.email?.message}</span></Label>
                <Input type="email" placeholder="Digite seu email" {...register("email")}/>
                <Label htmlFor="password">Senha<span>{errors.password?.message}</span></Label>
                {eyeClick?(
                <div>
                    <Input type="password" placeholder="Digite sua senha" {...register("password")}/>
                    <button type="button"><BsFillEyeFill onClick={(e) => handleClick(e.preventDefault())}/></button>
                </div> 
                ):(                
                <div>
                    <Input type="text" placeholder="Digite sua senha" {...register("password")}/>
                    <button><BsFillEyeSlashFill onClick={(e) => handleClick(e.preventDefault())}/></button>
                </div> 
                )}
                <ButtonPink type="submit">Entrar</ButtonPink>
            </Form>
        </Div>
        </Section>
        </>
        </motion.div>

    )
}

export default Login
