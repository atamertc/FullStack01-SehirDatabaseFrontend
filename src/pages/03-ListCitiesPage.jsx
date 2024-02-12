import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import { CitiesTable } from "../components/CitiesTable";

export default function ListCitiesPage() {
  return (
    <>
      <header>
        <NavbarComp></NavbarComp>
      </header>
      <main>
        <CitiesTable></CitiesTable>
      </main>
      <FooterComp></FooterComp>
    </>
  );
}
