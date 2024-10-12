import { RootState } from "@/Store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: ReactNode }) {
  const user = useSelector((state: RootState) => state.userState);
  console.log(user);
  if (!user.user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
