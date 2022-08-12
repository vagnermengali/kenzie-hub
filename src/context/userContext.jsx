import Api from "../services/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loadingAnimatedOne from "../assets/animation/lf20_6xbeolse.json"
import loadingAnimatedTwo from "../assets/animation/lf20_jnafchza.json"
import loadingAnimatedTree from "../assets/animation/lf20_4kpkaqsg (1).json"
import loadingAnimatedFour from "../assets/animation/lf20_ikh7wnhd.json"
import loadingAnimatedFive from "../assets/animation/lf20_il71njow.json"
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";;

export const Context = createContext();

const ProviderUser = ({children}) => {
    const token = JSON.parse(window.localStorage.getItem("authToken"))
    const user = JSON.parse(window.localStorage.getItem("authUser"))
    const [dropDownRegister, setDropdownRegister] = useState("none");
    const [dropDownEdit, setDropdownEdit] = useState("none");
    const [eyeClick, setEyeClick] = useState(true)
    const [listTech, setListTech] = useState([])
    const [tech, setTech] = useState({})
    const [loading, setLoading] =useState(true)
    const navigate = useNavigate()

    const notifyLoginSuccess = (test) => toast.success(test)
    const notifyLoginError = (test) => toast.error(test)
    //Login
    const LoginUser = (data) => {
       Api.post("/sessions",data)
       .then((res) => {
        
        if(res.status === 200) {
            notifyLoginSuccess("Logado com sucesso")
            window.localStorage.clear()
            window.localStorage.setItem("authUser", JSON.stringify(res.data.user))
            window.localStorage.setItem("authId", JSON.stringify(res.data.user.id))
            window.localStorage.setItem("authToken", JSON.stringify(res.data.token))
            navigate("/dashboard")
       }else {
        return null
        }
    })
        .catch(() => notifyLoginError("E-mail ou senha incorreto")
        )
    }

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
         res.status === 201? notifyLoginSuccess("Usário criado") && navigate("/", { replace: true }): null)
        .catch(() => notifyLoginError("E-mail já existente"))
     }

    //Dashboard
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
                notifyLoginSuccess("Tecnologia editada com sucesso")
            })
            .catch(() => notifyLoginError("Tecnologia não cadastrada"))
    }

    const deleteTech = () => {
        Api.delete(`/users/techs/${tech.id}`, {
            headers: {Authorization: `Bearer ${token}`}
            })
            .then(() => {
                setDropdownEdit("none")
            })
    }

    const showDropdownRegister = () => {
        setDropdownRegister("flex");
    }
  
    const closeDropdownRegister = () => {
        setDropdownRegister("none");
    };



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

    //Lottie
    const [animateState] = useState({
        isStopped: false,
        isPaused: false,
    })

    const defaultOptionsOne = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedOne,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsTwo = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedTwo,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsFive = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedFive,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsTree = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedTree,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsFour = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedFour,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Context.Provider value={{ animateState, defaultOptionsOne, defaultOptionsTree, defaultOptionsFour, defaultOptionsFive, defaultOptionsTwo, loading,tech, listTech, eyeClick, deleteTech,LoginUser, handleClick , navigate, registerUser, token, user, registerTech, closeDropdownRegister, showDropdownRegister, dropDownRegister, closeDropdownEdit, showDropdownEdit, dropDownEdit, editTech}}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser