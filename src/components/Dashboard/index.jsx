import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "./Header"
import List from "./List"
import "./style"

function Dashboard() {
    const navigate = useNavigate()
    const token = JSON.parse(window.localStorage.getItem("authToken"))

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
            </>
            </motion.div>
        )
    }

}

export default Dashboard