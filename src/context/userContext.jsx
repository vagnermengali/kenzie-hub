import Api from "../services/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const UserProvider = ({children}) => {
    const [eyeClick, setEyeClick] = useState(true)

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

    const registerUser = (data) => {
        Api.post("/users",data)
        .then((res) => 
         res.status === 201? notifyLoginSuccess("Usário criado") && setTimeout(() => {navigate("/", { replace: true })}, 4000): null)
        .catch(() => notifyLoginError("E-mail já existente"))
     }
     const notifyLoginSuccess = (test) => toast.success(test)
     const notifyLoginError = (test) => toast.error(test)
 

    return (
        <Context.Provider value={{ eyeClick, LoginUser, handleClick , navigate, registerUser}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider