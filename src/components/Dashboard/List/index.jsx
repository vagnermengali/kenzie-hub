import { Main, DivContainer, TitleLi, ButtonAdd, DivContentUl, Ul } from "./style"
import { BsPlusLg } from "react-icons/bs";
import Card from "./Card";
import "./style"

function List() {

    return (
        <Main>
            <DivContainer>
                <TitleLi>Tecnologias</TitleLi> 
                <ButtonAdd><BsPlusLg/></ButtonAdd>
            </DivContainer>
            <DivContentUl>
                <Ul>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Ul>
            </DivContentUl>
        </Main>
    )
}

export default List