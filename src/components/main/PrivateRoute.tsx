import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: ReactNode }) {
  const user = useSelector((state) => state.userReducer);
  console.log(user);

  <div>{user?.user ? children : <Navigate to="/login" />}</div>;
}

export default PrivateRoute;
