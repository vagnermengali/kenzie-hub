import { Section, Div, Form, Title, Input, Label, ButtonGrey, ButtonPink, ParagraphQuestion, Img, DivRegister } from "./style"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import Api from "../../services/api";
import logo  from "../../assets/logo.svg"
import { motion } from "framer-motion"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./style"
import { useState } from "react";

function Login() {
    const [eyeClick, setEyeClick] = useState(true)
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório"),
        password: yup.string().required("Senha obrigatória"),
        });

        const {
            register,
            handleSubmit,
            formState: { errors }
            } = useForm({
            resolver: yupResolver(formSchema)
        });
    
        const LoginUser = (data) => {
           Api.post("/sessions",data)
           .then((res) => {
            
            if(res.status === 200) {
                notifySuccess()
                window.localStorage.clear()
                window.localStorage.setItem("authUser", JSON.stringify(res.data.user))
                window.localStorage.setItem("authId", JSON.stringify(res.data.user.id))
                window.localStorage.setItem("authToken", JSON.stringify(res.data.token))
                setTimeout(() => {navigate("/home")}, 2000)
           }else {
            return null  
            }
        })
            .catch(() => notifyError()
            )
        }
        const notifySuccess = () =>  {
            toast.loading("Verificando dados")
            setTimeout(() => {toast.dismiss()},1000);
            
            setTimeout(() => {toast.success("Logado com sucesso")},1500);
        }
        const notifyError = () =>  {
            toast.loading("Verificando dados")
            setTimeout(() => {toast.dismiss()},1000);
            
            setTimeout(() => {toast.error("E-mail ou senha incorreto")},1500);
        }

        const navigate = useNavigate()

        const handleClick = () => {
            if(eyeClick) {
                setEyeClick(false)
            }else {
                setEyeClick(true)
            }
        }
    
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
            <Img src={logo} alt=""/>
            <Form onSubmit={handleSubmit(LoginUser)}>
                <Title>Login</Title>
                <Label htmlFor="email">Email<span>{errors.email?.message}</span></Label>
                <Input type="email" placeholder="Digite seu email" {...register("email")}/>
                <Label htmlFor="password">Senha<span>{errors.password?.message}</span></Label>
                {eyeClick?(
                <div>
                    <Input type="password" placeholder="Digite sua senha" {...register("password")}/>
                    <button><BsFillEyeFill onClick={(e) => handleClick(e.preventDefault())}/></button>
                </div> 
                ):(                
                <div>
                    <Input type="text" placeholder="Digite sua senha" {...register("password")}/>
                    <button><BsFillEyeSlashFill onClick={(e) => handleClick(e.preventDefault())}/></button>
                </div> 
                )}
                <ButtonPink type="submit">Entrar</ButtonPink>
            </Form>
            <DivRegister>
                <ParagraphQuestion>Ainda não possui conta?</ParagraphQuestion>
                <ButtonGrey onClick={() => navigate("register")} >Cadastre-se</ButtonGrey> 
            </DivRegister>
        </Div>
        </Section>
        </>
        </motion.div>

    )
}

export default Login
