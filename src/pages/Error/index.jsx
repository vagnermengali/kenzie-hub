import { ContainerSection } from "./style"
import { useEffect, useRef } from "react";
import lottie from 'lottie-web';

function Error() {
    const containerError = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:containerError.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets9.lottiefiles.com/packages/lf20_il71njow.json'

        });
        return () => lottie.destroy()
    },[])
    return (
        <ContainerSection>
            <div>
                <div ref={containerError}></div>
            </div>
        </ContainerSection>
    )
}

export default Error