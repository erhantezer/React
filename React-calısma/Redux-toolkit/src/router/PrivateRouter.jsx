import { Navigate, Outlet } from "react-router-dom"
const user ="";

const PrivateRouter = () => {


  return (
    user ? <Outlet/> : <Navigate to={"/login"} />
  )
}

export default PrivateRouter;