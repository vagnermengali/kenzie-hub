import { motion } from "framer-motion";
import Header from "../../components/Header";
import List from "../../components/List";
import ModalEdit from "../../components/Modal/ModalEdit";
import ModalRegister from "../../components/Modal/ModalRegister";
import { useContext } from "react";
import { Context } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { token } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      {!token ? (
        setTimeout(() => {
          navigate("/");
        }, 100)
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <List />
          <ModalEdit />
          <ModalRegister />
        </motion.div>
      )}
    </>
  );
}

export default Dashboard;
