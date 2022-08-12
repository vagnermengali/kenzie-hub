import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Home from "../pages/Home"
import Error from "../pages/Error"
import {Routes, Route} from "react-router-dom";

function RouteMain() {

    return (
    <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home/:id" element={<Dashboard />}></Route>
        <Route path="*" element={<Error replace to="/error"/>}></Route>
    </Routes>
    )
}

export default RouteMain


// function Authenticator() {
//     const [isAuthenticated, setAuthenticated] = useState(false)
//     const navigate  = useNavigate();

//     const token = window.localStorage.getItem("authToken")
    
//     if(!token) {
//         setAuthenticated(false);
//     },[navigate, isAuthenticated]

//     if(!isAuthenticated) {
        
//         return (
//             <>
//             <Routes>
//                 <Route path="*" element={<Navigate replace to="/" />}></Route>
//                 <Route path="/">
//                     <Login setAuthenticated={setAuthenticated}/>
//                 </Route>
//                 <Route path="/home" element={<Dashboard />}></Route>
//                 <Route path="/register" element={<Register />}></Route>
//             </Routes>
//             </>
//         )
//     }else {
//         return (
//             <>
//             <Routes>
//                 <Route path="*" element={<Navigate replace to="/" />}></Route>
//                 <Route path="/"element={<Login/>}></Route>
//                 <Route path="/home" element={<Dashboard />}></Route>
//                 <Route path="/register" element={<Register />}></Route>
//             </Routes>
//             </>
//         )
//     }
// }
// export default Authenticator