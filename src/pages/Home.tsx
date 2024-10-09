import Logo from "@/components/main/Logo";
import Landing from "./Landing";
import Container from "@/components/main/Container";

function Home() {
  return (
    <Container>
      <section className="space-y-4">
        <Logo />
        <Landing />
      </section>
    </Container>
  );
}

export default Home;
