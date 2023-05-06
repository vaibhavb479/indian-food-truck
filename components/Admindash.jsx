import css from "../styles/Admindash.module.css";
import { useStore } from "../store/store";
import { urlFor } from "../lib/client";

export default function AboutUs() {
  const CartData = useStore((state) => state.cart);
  return (
    <div className={css.container}>
      <div className={css.details}>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Addon</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {CartData.foods.length > 0 &&
                CartData.foods.map((food, i) => {
                  const src = urlFor(food.image).url();
                  return (
                    <tr key={i}>
                      <td>{food.name}</td>
                      <td>{food?.menuType[food.category]}</td>
                      <td>{food.price.toFixed(2)}</td>
                      <td>
                        {food.addonprice > 0 ? <span>{food.addOn}</span> : "-"}
                      </td>
                      <td>{food.quantity}</td>
                      <td>{(food.price * food.quantity).toFixed(2)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
