import { ContainerSection, Div, DivContentLeft, DivContentRigth, Img } from "./style"
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import Lottie from 'react-lottie';
import { Context } from "../../context/userContext";
import { motion } from "framer-motion"

function Home() {
    const { navigate, animateState, defaultOptionsTree, defaultOptionsFour } = useContext(Context)
    
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity:0 }}
        transition={{ duration: 0.5}}
        >
        <>
        <ContainerSection>
            <Div>
                <DivContentLeft>
                    <div className="img">
                        <Lottie options={defaultOptionsTree} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
                    </div>
                    <Img src={logo} alt="" />
                    <h1>A plataforma completa para desenvolvedores.</h1>
                </DivContentLeft>
                <DivContentRigth>
                    <div className="divTitle">
                        <h2>Bem-vindo</h2>
                        <p>A maior plataforma para desenvolvedores divugarem seu conhecimento na área de TI.</p>
                        <div className="img">
                            <Lottie options={defaultOptionsFour} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
                        </div>
                    </div>
                    <div className="divButton">
                        <button onClick={() => navigate("login")}>Logar</button>
                        <button onClick={() => navigate("register")}>Cadastrar</button>
                    </div>
                </DivContentRigth>
            </Div>
        </ContainerSection>
        </>
        </motion.div>
    )
}

export default Home