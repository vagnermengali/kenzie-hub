import { Li, Title, DivDetails, PDetails,DivEmpty } from "./style"
import { useContext } from "react";
import Lottie from 'react-lottie';
import { Context } from "../../context/userContext";

function Card() {
    const { loading, listTech, showDropdownEdit, defaultOptionsOne, defaultOptionsTwo, animateState } = useContext(Context)

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
                    <div className="img">
                        <Lottie  options={defaultOptionsOne} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
                    </div>
                </DivEmpty>
                )
     }else if(loading){
        return (
            <DivEmpty>
                <div className="img">
                <Lottie options={defaultOptionsTwo} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
                </div>
            </DivEmpty>
        )
    }
}

export default Card