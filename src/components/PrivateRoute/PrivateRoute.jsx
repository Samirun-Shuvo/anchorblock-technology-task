import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    if(token){
        return (
            <div>{children}</div>
          )
    }
    else{
        return <Navigate to="/signIn" replace={true}></Navigate>
    }
 
}

export default PrivateRoute