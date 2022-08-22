import { ContainerSection } from "./style"
import loadingAnimatedFive from "../../assets/animation/lf20_il71njow.json"
import Lottie from 'react-lottie';
import { useState } from "react"


function Error() {
    const [animateState] = useState({
        isStopped: false,
        isPaused: false,
    })

    const defaultOptionsFive = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimatedFive,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <ContainerSection>
            <div>
            <Lottie options={defaultOptionsFive} isStopped={animateState.isStopped} isPaused={animateState.isPaused}/>
            </div>
        </ContainerSection>
    )
}

export default Error