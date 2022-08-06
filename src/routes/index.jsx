import Register from "../components/Register"
import Dashboard from "../components/Dashboard";
import Login from "../components/Login"
import {Routes, Route, Navigate} from "react-router-dom";

function RouteMain() {

    return (
    <Routes>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home/:id" element={<Dashboard />}></Route>
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