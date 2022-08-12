import { Li, Title, DivDetails, PDetails,DivEmpty } from "./style"
import { useContext ,useEffect, useRef } from "react";
import lottie from 'lottie-web';
import { Context } from "../../context/userContext";

function Card() {
    const { loading, listTech, showDropdownEdit } = useContext(Context)

    const containerOne = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerOne.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets1.lottiefiles.com/packages/lf20_6xbeolse.json'

        });
        return () => lottie.destroy()
    },[])

    const containerTwo = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerTwo.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets9.lottiefiles.com/packages/lf20_jnafchza.json'

        });
        return () => lottie.destroy()
    },[])

    if(listTech?.toString() !== "") {
        return (
            listTech?.map((elem) => (
                <Li key={elem.id} id={elem.id} onClick={() => showDropdownEdit(elem)} >
                    <Title>{elem.title}</Title>
                    <DivDetails>
                        <PDetails>{elem.status}</PDetails>
                    </DivDetails>
                </Li>
            ))
        )
        }if(listTech?.toString() === "" && !loading) {

            return (
                <DivEmpty>
                    <h1>Sua lista de tecnologias está vazia!</h1>
                    <p>Adicione uma tecnologia</p>
                    <div className="img" ref={containerOne}></div>
                </DivEmpty>
                )
     }else if(loading){
        return (
            <DivEmpty>
                <div className="img" ref={containerTwo}></div>
            </DivEmpty>
        )
    }
}

export default Card