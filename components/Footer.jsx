import { UilFacebook, UilInstagram, UilPhone } from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import css from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.footer__addr}>
          <Link href="../">
            <h1 className={css.footer__logo}>
              {" "}
              <Image src={Logo} alt="" width={50} height={50} />{" "}
              <span>Indian Food Truck</span>
            </h1>
          </Link>
          <span>
            We are one of the must try spot, where you all should stop by and
            give us your support.
          </span>
        </div>

        <ul className={css.footer__nav}>
          <li className={css.nav__item}>
            <h2 className={css.nav__title}>Social Media</h2>

            <ul className={css.nav__ulmedia}>
              <li className={css.facebook}>
                <a
                  href="https://www.facebook.com/profile.php?id=100089118845825/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <UilFacebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/indianfoodtruck.online/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <UilInstagram />{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className={css.nav__item}>
            <h2 className={css.nav__title}>Contact Us</h2>

            <p className={css.contact__footer}>
              <a
                className={css.footer__btn}
                href="mailto:contact@indianfoodtruck.online"
                target="_blank"
                rel="noreferrer"
              >
                Email 📧
              </a>
              <a
                className={css.footer__btn}
                href="tel:+16692907925"
                target="_blank"
                rel="noreferrer"
              >
                Contact ☎️
              </a>
            </p>
            <address>
              #603 Old San Francisco Road, Sunnyvale, CA-94086
              <br />
            </address>
          </li>
        </ul>

        <div className={css.legal}>
          <p>
            © 2023 by DeMarc Creation. Coded and Secured by{" "}
            <a href="https://www.aavians.com/" target="_blank" rel="noreferrer">
              AAVIANS
            </a>
          </p>
        </div>
      </footer>
      <Link href="/menuList">
        <div className={css.button_sticky}>
          <i>🥘</i>Order Online
        </div>
      </Link>
    </>
  );
}
