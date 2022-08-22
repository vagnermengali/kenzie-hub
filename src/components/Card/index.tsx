import { Li, Title, DivDetails, PDetails, DivEmpty } from "./style";
import loadingAnimatedOne from "../../assets/animation/lf20_6xbeolse.json";
import loadingAnimatedTwo from "../../assets/animation/lf20_jnafchza.json";
import { useContext, useState } from "react";
import Lottie from "react-lottie";
import { Context } from "../../context/userContext";
import { Techs } from "../../context/userContext";

function Card() {
  const { loading, listTech, setDropdownEdit, setTech } = useContext(Context);

  const showDropdownEdit = (elem: Techs) => {
    setDropdownEdit("flex");
    setTech(elem);
  };

  const [animateState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimatedOne,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimatedTwo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {listTech?.toString() !== "" ? (
        listTech?.map((elem: Techs) => (
          <Li key={elem.id} id={elem.id} onClick={() => showDropdownEdit(elem)}>
            <Title>{elem.title}</Title>
            <DivDetails>
              <PDetails>{elem.status}</PDetails>
            </DivDetails>
          </Li>
        ))
      ) : listTech?.toString() === "" && !loading ? (
        <DivEmpty>
          <h1>Sua lista de tecnologias está vazia!</h1>
          <p>Adicione uma tecnologia</p>
          <div className="img">
            <Lottie
              options={defaultOptionsOne}
              isStopped={animateState.isStopped}
              isPaused={animateState.isPaused}
            />
          </div>
        </DivEmpty>
      ) : (
        <DivEmpty>
          <div className="img">
            <Lottie
              options={defaultOptionsTwo}
              isStopped={animateState.isStopped}
              isPaused={animateState.isPaused}
            />
          </div>
        </DivEmpty>
      )}
    </>
  );
}

export default Card;
