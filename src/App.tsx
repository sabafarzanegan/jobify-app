import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Notfound from "./components/main/Notfound";
import Stats from "./pages/dashboard/Stats";
import Alljobs from "./pages/dashboard/Alljobs";
import Addjob from "./pages/dashboard/Addjob";
import Profile from "./pages/dashboard/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index path="stats" element={<Stats />} />
        <Route path="all-jobs" element={<Alljobs />} />
        <Route path="add-job" element={<Addjob />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
