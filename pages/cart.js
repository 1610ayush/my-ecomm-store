import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Cart.module.css';
import { useCart } from '../hooks/use-cart';

import Table from '../components/Table';
import products from "../products.json"

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];

export default function Cart() {
    const {cartItems, checkout, updateItem} = useCart();

    const data = cartItems.map(({ id, quantity, pricePerItem }) => {
        const product = products.find(({ id: pid }) => pid === id);
        const { title } = product || {};

        const Quantity = () => {
            function handleOnSubmit(e){
                e.preventDefault();

                const {currentTarget} = e;
                const inputs = Array.from(currentTarget.elements);
                const quantity = inputs.find(input => input.name === 'quantity')?.value
                updateItem({
                    id: id,
                    quantity: quantity && parseInt(quantity)
                })

            }

            return (
                <form onSubmit={handleOnSubmit}>
                    <input type="number" className={styles.quantity} name="quantity" min={0} defualtValue={quantity} />
                    <button className={styles.quantityButton}>Update</button>
                </form>
            )
        }

        return {
          id,
          title,
          quantity: <Quantity />,
          pricePerUnit: Number(pricePerItem).toFixed(0),
          total: Number(quantity * pricePerItem).toFixed(2)
        }
      });

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Style Yourself!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

    </div>
  )
}