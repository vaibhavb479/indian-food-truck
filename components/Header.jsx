import css from "../styles/Header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [Order, setOrder] = useState("");
  //hamburger menu//
  const [isActive, setActive] = useState("false");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);
  const items = useStore((state) => state.cart.foods.length);

  const ToggleClass = () => {
    setActive(!isActive);
  };
  const isActiveSty = {
    display: "block",
  };
  const inActiveSty = {
    display: "none",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md fixedTop">
        {/* <!-- Brand --> */}
        <div className="navbar-brand">
          <Link href="../">
            <div className={css.logo}>
              <Image src={Logo} alt="" width={45} height={45} />
              <span>Indian Food Truck</span>
            </div>
          </Link>
        </div>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={ToggleClass}
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}

        <div
          className="collapse navbar-collapse justifyContent"
          id="collapsibleNavbar"
          style={isActive ? isActiveSty : inActiveSty}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="../">Home</Link>
            </li>
            <li className="nav-item mb-1">
              <Link href="/about">About us</Link>
            </li>
            <li className="nav-item mb-1">
              <Link href="/cart">
                <div className={css.cart}>
                  <i
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                    style={{ fontSize: "28px" }}
                  ></i>
                  {/* <UilShoppingBag size={35} color="#2E2E2E" /> */}
                  <div className={css.badge}>{items}</div>
                </div>
              </Link>
            </li>
            {Order && (
              <li className="nav-item">
                <Link href={`/order/${Order}`}>
                  <div className={css.cart}>
                    <UilReceipt size={28} color="#2E2E2E" />
                    {Order != "" && <div className={css.badge}>1</div>}
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
