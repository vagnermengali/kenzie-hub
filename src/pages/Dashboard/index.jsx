import { motion } from "framer-motion"
import Header from "../../components/Header"
import List from "../../components/List"
import ModalEdit from "../../components/Modal/ModalEdit"
import ModalRegister from "../../components/Modal/ModalRegister"
import "./style"
import { useContext } from "react"
import { Context } from "../../context/userContext"

function Dashboard() {
    const { navigate, token } =useContext(Context)

    if(!token) {
        setTimeout(() => {navigate("/")}, 100)
    }else {
        return (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{ opacity:0 }}
            transition={{ duration: 0.5 }}
            >
            <>
            <Header />
            <List />
            <ModalEdit />
            <ModalRegister />
            </>
            </motion.div>
        )
    }

}

export default Dashboard