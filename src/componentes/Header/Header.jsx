import NavBar from "../NavBar/NavBar";
import CartWidget from "../CartWidget/CartWidget";
import SearchOrder from "../SearchOrder/SearchOrder";

export default function Header() {
  return (
    <header>
      <NavBar>
        <CartWidget />
        <SearchOrder />
      </NavBar>
    </header>
  );
}
