import { NavbarComponent } from "../navbar/NavbarComponent";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../footer/FooterComponent";
export default function Layout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
