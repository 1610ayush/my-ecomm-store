import { cartContext, useCartState } from '../hooks/use-cart'
import '../styles/globals.css'
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return(
    <cartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
    </cartContext.Provider>
  );
}

export default MyApp
