import { Link } from "react-router-dom";
import NOTFOUNDIMG from "../../assets/images/notfound.png";
import { Button } from "../ui/button";
import Container from "./Container";
function Notfound() {
  return (
    <Container>
      <section className="flex flex-col items-center gap-y-4">
        <img src={NOTFOUNDIMG} alt="" className="w-[800px] mx-auto" />
        <p>صفحه موردنظر یافت نشد</p>
        <Link to="/">
          <Button variant="outline">برگشت به صفحه اصلی</Button>
        </Link>
      </section>
    </Container>
  );
}

export default Notfound;
