import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";
const Header = () => {
  const {cartData} = useContext(MovieContext) 
  const [showCart, setShowCart] = useState(false);
  const handleCartShow = () => {
    setShowCart(true);
  }
  const {darkMode,setDarkMode} = useContext(ThemeContext)
  
  return (
    <>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}
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
              <button onClick={()=> setDarkMode(!darkMode)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                <img src={darkMode ? Sun : Moon} width={24} height={24} alt="Moon" />
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
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[23px] bg-[#12cf71a8] text-white text-center p-[1px] w-[25px] h-[25px]">
                    {cartData.length}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
