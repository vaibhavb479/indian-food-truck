import Layout from "../components/Layout";
import css from "../styles/Cart.module.css";
import Image from "next/dist/client/image";
import { useStore } from "../store/store";
import { urlFor } from "../lib/client";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";
export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removeFood = useStore((state) => state.removeFood);
  const [PaymentMethod, setPaymentMethod] = useState(null);
  const [Order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
  );

  const handleRemove = (i) => {
    removeFood(i);
    toast.error("Item Removed");
  };

  const router = useRouter();
  const total = () =>
    CartData.foods.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.setItem("total", total());
  };

  const handleCheckout = async () => {
    typeof window !== "undefined" && localStorage.setItem("total", total());
    setPaymentMethod(1);
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CartData.foods),
    });

    if (response.status === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");
    router.push(data.url);
  };
  return (
    <Layout>
      <div className={css.container}>
        {/* Details */}
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Food</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {CartData.foods.length > 0 &&
                CartData.foods.map((food, i) => {
                  const src = urlFor(food.image).url();

                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                        />
                      </td>
                      <td>{food.name}</td>
                      <td>
                        {food.category === 0
                          ? "Veg"
                          : food.category === 1
                          ? "Egg"
                          : "Chicken"}
                      </td>
                      <td>{food.price}</td>
                      <td>{food.quantity}</td>
                      <td>{food.price * food.quantity}</td>
                      <td
                        style={{ color: "var(--themeRed)", cursor: "pointer" }}
                        onClick={() => handleRemove(i)}
                      >
                        x
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.CartDetails}>
            <div>
              <span>items</span>
              <span>{CartData.foods.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span> {total()}
              </span>
            </div>
          </div>

          {!Order && CartData.foods.length > 0 ? (
            <div className={css.buttons}>
              {/* <button className="btn" onClick={handleOnDelivery}>
                {" "}
                Pay on Delivery
              </button> */}
              <button className="btnColor" onClick={handleCheckout}>
                {" "}
                Pay Now
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <Toaster />

      {/* Modal */}
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod={PaymentMethod}
      />
    </Layout>
  );
}
