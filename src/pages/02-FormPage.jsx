import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import { CreateCityForm } from "../components/CreateCityForm";

export default function FormPage() {
  return (
    <>
      <header>
        <NavbarComp></NavbarComp>
      </header>
      <main>
        <CreateCityForm></CreateCityForm>
      </main>
      <FooterComp></FooterComp>
    </>
  );
}
