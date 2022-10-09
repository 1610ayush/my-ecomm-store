import {FaShoppingCart} from "react-icons/fa";
import styles from './Nav.module.css';
import { useCart } from "../../hooks/use-cart";
import Link from "next/link";

const Nav = () => {
  const {subtotal} = useCart();

  return (
    <nav className={styles.nav}>
       <Link href='/'>
          <a>
            <p className={styles.navTitle}>
              Style Yourself!
            </p>
          </a>
        </Link>
      <p className={styles.navCart}>
        <Link href="/cart">
          <a><FaShoppingCart size={35} /> ₹{subtotal}</a>
        </Link>
      </p>
    </nav>
  )
}

export default Nav;
