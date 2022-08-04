import { Li, Title, DivDetails, PDetails, ButtonDelete } from "./style"
import { BsTrash } from "react-icons/bs";
import "./style"

function Card() {

    return (
        <Li>
            <Title>React JS</Title>
            <DivDetails>
                <PDetails>Intermedíario</PDetails>
                <ButtonDelete><BsTrash /></ButtonDelete>
            </DivDetails>
        </Li>
    )
}

export default Card