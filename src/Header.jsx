import { useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCartShow = () => {
    setShowCart(true);
  }
  return (
    <>
      <header>
        {showCart && <CartDetails onClose={()=> setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <button href="index.html">
            <img src={Logo} width={139} height={26} alt="Logo" />
          </button>
          <ul className="flex items-center space-x-5">
            <li>
              <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                <img src={Ring} width={24} height={24} alt="Ring" />
              </button>
            </li>
            <li>
              <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                <img src={Moon} width={24} height={24} alt="Moon" />
              </button>
            </li>
            <li>
              <button
                onClick={handleCartShow}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              >
                <img
                  src={ShoppingCart}
                  width={24}
                  height={24}
                  alt="Shopping Cart"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
