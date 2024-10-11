import Container from "@/components/main/Container";
import Logo from "@/components/main/Logo";
import Sidebar from "@/components/main/Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <Container>
      <Logo />
      <main className="flex items-start justify-between w-full gap-x-4 mt-4">
        <Sidebar />
        <div className="flex-1 py-4">
          <Outlet />
        </div>
      </main>
    </Container>
  );
}

export default Dashboard;
