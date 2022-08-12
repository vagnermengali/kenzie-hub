import ProviderUserLogin from "../../context/loginContext"
import ProviderUserRegister from "../../context/registerContext"
import ProviderUserDashboard from "../../context/dashboardContext"

const Provider = () => {

    return (
    <>
    <ProviderUserLogin />
    <ProviderUserDashboard />
    <ProviderUserRegister />
    </>
    )
    
}

export default Provider