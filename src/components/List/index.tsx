import { Main, DivContainer, TitleLi, ButtonAdd, DivContentUl, Ul } from "./style"
import { BsPlusLg } from "react-icons/bs";
import Card from "../Card";
import { useContext } from "react";
import { Context } from "../../context/userContext";

function List() {
    const { setDropdownRegister } = useContext(Context)
    const showDropdownRegister = () => {
        setDropdownRegister("flex");
    }
    
    return (
        <Main>
            <DivContainer>
                <TitleLi>Tecnologias</TitleLi> 
                <ButtonAdd onClick={showDropdownRegister}><BsPlusLg />
                </ButtonAdd>
            </DivContainer>
            <DivContentUl>
                <Ul>
                    <Card />
                </Ul>
            </DivContentUl>
        </Main>
    )
}

export default List