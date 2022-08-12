import { ContainerSection } from "./style"
import { useContext } from "react";
import Lottie from 'react-lottie';
import { Context } from "../../context/userContext";

function Error() {
    const { animateState, defaultOptionsFive } = useContext(Context)
 
    return (
        <ContainerSection>
            <div>
            <Lottie className="img" options={defaultOptionsFive} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
            </div>
        </ContainerSection>
    )
}

export default Error