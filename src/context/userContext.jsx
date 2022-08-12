import Api from "../services/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";;

export const Context = createContext();

const ProviderUser = ({children}) => {
    const token = JSON.parse(window.localStorage.getItem("authToken"))
    const user = JSON.parse(window.localStorage.getItem("authUser"))
//Login
    const [eyeClick, setEyeClick] = useState(true)
    const [listTech, setListTech] = useState([])
    const [tech, setTech] = useState({})
    const [loading, setLoading] =useState(true)

    const LoginUser = (data) => {
       Api.post("/sessions",data)
       .then((res) => {
        
        if(res.status === 200) {
            notifySuccess()
            window.localStorage.clear()
            window.localStorage.setItem("authUser", JSON.stringify(res.data.user))
            window.localStorage.setItem("authId", JSON.stringify(res.data.user.id))
            window.localStorage.setItem("authToken", JSON.stringify(res.data.token))
            setTimeout(() => {navigate("/dashboard")}, 2000)
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
//Register
    const registerUser = (data) => {
        Api.post("/users",data)
        .then((res) => 
         res.status === 201? notifyLoginSuccess("Usário criado") && setTimeout(() => {navigate("/", { replace: true })}, 4000): null)
        .catch(() => notifyLoginError("E-mail já existente"))
     }
     const notifyLoginSuccess = (test) => toast.success(test)
     const notifyLoginError = (test) => toast.error(test)

//dashboard

    const registerTech = async (data) => {
        await Api.post("/users/techs", data, {
            headers: {Authorization: `Bearer ${token}`}
            })
            .then((res) => res.status === 201 ?  notifyLoginSuccess("Tecnologia criada com sucesso") && setDropdownRegister("none") : null )
            .catch(() => notifyLoginError("Tecnologia já criada"))
    }

    const editTech = (data) => {
        Api.put(`/users/techs/${tech.id}`,data, {
            headers: {Authorization: `Bearer ${token}`}
            })
            .then((res) => {
                setListTech(res.data.techs)
                setDropdownEdit("none")
                setLoading(false)
            })
    }

    const deleteTech = () => {
        Api.delete(`/users/techs/${tech.id}`, {
            headers: {Authorization: `Bearer ${token}`}
            })
            .then(() => {
                setDropdownEdit("none")
            })
    }

    const [dropDownRegister, setDropdownRegister] = useState("none");

    const showDropdownRegister = () => {
        setDropdownRegister("flex");
    }
  
    const closeDropdownRegister = () => {
        setDropdownRegister("none");
    };

    const [dropDownEdit, setDropdownEdit] = useState("none");

    const showDropdownEdit = (elem) => {
        setDropdownEdit("flex");
        setTech(elem)
    }

    const closeDropdownEdit = () => {
        setDropdownEdit("none");
    };

    useEffect(() => {
        Api.get("/profile", {
            headers: {Authorization: `Bearer ${token}`}
            })
            .then((res) => {
                setListTech(res.data.techs)
                setLoading(false)
            })
    },[dropDownRegister, dropDownEdit, token])
    return (
        <Context.Provider value={{ loading,tech, listTech, eyeClick, deleteTech,LoginUser, handleClick , navigate, registerUser, token, user, registerTech, closeDropdownRegister, showDropdownRegister, dropDownRegister, closeDropdownEdit, showDropdownEdit, dropDownEdit, editTech}}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser