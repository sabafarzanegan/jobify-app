import Container from "@/components/main/Container";
import Logo from "@/components/main/Logo";
import MobileSide from "@/components/main/mobileSide";
import Sidebar from "@/components/main/Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <Container>
      <Logo />
      <main className="flex items-start justify-between w-full gap-x-4 mt-4 flex-wrap">
        <Sidebar />
        <div className="flex-1 py-4">
          <MobileSide />
          <Outlet />
        </div>
      </main>
    </Container>
  );
}

export default Dashboard;
