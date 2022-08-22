import Api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";

interface User {
  avatar_url:string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: []
  updated_at: string;
  works: []
}

interface Children {
  children: ReactNode;
}

export interface Techs {
  title: string;
  status: string;
  id?: string;
}

type TechUserEdit = Omit<Techs, "title">;

interface UserDataRegister {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string | number;
  course_module: string;
}

interface UserDataLogin {
  email: string;
  password: number;
}

interface TechUserReponse {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface TechsResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: TechUserReponse[],
  works: [],
  created_at: string;
  updated_at: string;
  avatar_url: null
}

interface AllFunction {
  token: string | null;

  user: User;

  dropDownRegister: string;

  dropDownEdit: string;

  eyeClick: boolean;

  listTech: Techs[];

  tech: Techs;

  loading: boolean;

  notifyLoginSuccess?: (test: string) => void;

  notifyLoginError?: (test: string) => void;

  LoginUser: (data: UserDataLogin) => void;

  handleClick: () => void;

  registerUser: (data: UserDataRegister) => void;

  registerTech: (data: Techs) => void;

  editTech: (data: TechUserEdit) => void;

  deleteTech: () => void;

  setDropdownEdit: Dispatch<SetStateAction<string>>;

  setDropdownRegister: Dispatch<SetStateAction<string>>;

  setTech: Dispatch<SetStateAction<Techs>>;
}

export const Context = createContext<AllFunction>({} as AllFunction);

const ProviderUser = ({ children }: Children) => {
  const token = window.localStorage.getItem("authToken") || "";
  const user = JSON.parse(window.localStorage.getItem("authUser") || "{}");
  const [dropDownRegister, setDropdownRegister] = useState<string>("none");
  const [dropDownEdit, setDropdownEdit] = useState<string>("none");
  const [eyeClick, setEyeClick] = useState<boolean>(true);
  const [listTech, setListTech] = useState<Techs[]>([] as Techs[]);
  const [tech, setTech] = useState<Techs>({} as Techs)
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
     Api.get<TechsResponse>("/profile", {
        headers: {Authorization: `Bearer ${token}`}
        })
        .then((res) => {
          console.log(res)
          console.log(res.data.techs)
            setListTech(res.data.techs)
            setLoading(false)
        })
        .catch((err) => {
          console.log(err)
        });
        
},[dropDownRegister, dropDownEdit, token])

  const notifyLoginSuccess = (test: string) => toast.success(test);
  const notifyLoginError = (test: string) => toast.error(test);

  const LoginUser = (data: UserDataLogin) => {
    Api.post("/sessions", data)
      .then((res) => {
        if (res.status === 200) {
          notifyLoginSuccess("Logado com sucesso");
          window.localStorage.clear();
          window.localStorage.setItem(
            "authUser",
            JSON.stringify(res.data.user)
          );
          window.localStorage.setItem(
            "authId",
            JSON.stringify(res.data.user.id)
          );
          window.localStorage.setItem(
            "authToken",
            (res.data.token)
          );
          navigate("/dashboard");
        } else {
          return null;
        }
      })
      .catch(() => notifyLoginError("E-mail ou senha incorreto"));
  };

  const handleClick = () => {
    if (eyeClick) {
      setEyeClick(false);
    } else {
      setEyeClick(true);
    }
  };

  const registerUser = (data: UserDataRegister) => {
    Api.post("/users", data)
      .then((res) =>
        res.status === 201
          ? notifyLoginSuccess("Usário criado") &&
            navigate("/", { replace: true })
          : null
      )
      .catch(() => notifyLoginError("E-mail já existente"));
  };

  const registerTech = async (data: Techs) => {
    await Api.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) =>
        res.status === 201
          ? notifyLoginSuccess("Tecnologia criada com sucesso!") &&
            setDropdownRegister("none")
          : null
      )
      .catch((err) => {
        notifyLoginError("Tecnologia já criada!");
        setDropdownEdit("none");
        console.log(err)
      });
  };

  const editTech = (data: TechUserEdit) => {
    Api.put(`/users/techs/${tech.id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setListTech(res.data.techs);
        setDropdownEdit("none");
        setLoading(false);
        notifyLoginSuccess("Tecnologia editada com sucesso!");
      })
      .catch(() => {
        notifyLoginError("Tecnologia não editada!");
      });
  };

  const deleteTech = () => {
    Api.delete(`/users/techs/${tech.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      setDropdownEdit("none");
      notifyLoginSuccess("Tecnologia excluída com sucesso!");
    });
  };

  return (
    <Context.Provider
      value={{
        setDropdownEdit,
        setDropdownRegister,
        setTech,
        loading,
        tech,
        listTech,
        eyeClick,
        deleteTech,
        LoginUser,
        handleClick,
        registerUser,
        token,
        user,
        registerTech,
        dropDownRegister,
        dropDownEdit,
        editTech,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProviderUser;