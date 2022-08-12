import { ContainerSection, Div, DivContentLeft, DivContentRigth, Img } from "./style"
import logo from "../../assets/logo.svg"
import { useContext ,useEffect, useRef } from "react";
import lottie from 'lottie-web';
import { Context } from "../../context/userContext";
import { motion } from "framer-motion"

function Home() {
    const { navigate} = useContext(Context)
    
    const containerHomeTwo = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerHomeTwo.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets1.lottiefiles.com/packages/lf20_ikh7wnhd.json'

        });
        return () => lottie.destroy()
    },[])
    const containerHomeOne = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerHomeOne.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets10.lottiefiles.com/packages/lf20_4kpkaqsg.json'

        });
        return () => lottie.destroy()
    },[])

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
                    <div className="img" ref={containerHomeOne}></div>
                    <Img src={logo} alt="" />
                    <h1>A plataforma completa para desenvolvedores.</h1>
                </DivContentLeft>
                <DivContentRigth>
                    <div className="divTitle">
                        <h2>Bem-vindo</h2>
                        <p>A maior plataforma para desenvolvedores divugarem seu conhecimento na área de TI.</p>
                            <div className="img" ref={containerHomeTwo}></div>
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