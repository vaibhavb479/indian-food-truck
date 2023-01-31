import { UilFacebook, UilInstagram, UilPhone } from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import css from "../styles/Footer.module.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function Footer() {
  const tooltip = (
    <Tooltip id="tooltip">
      <strong>
        Yes, we take party orders in our nearby locations. For more information,
        please visit our location or contact us via email.
      </strong>
    </Tooltip>
  );

  const tooltip1 = (
    <Tooltip id="tooltip1">
      <strong>
        We use secure servers and encryption to protect your personal and
        payment information. However, it is always a good idea to take
        additional precautions, such as making sure that the website is using a
        secure connection (look for https in the URL) and avoiding public WiFi
        networks when entering sensitive information.
      </strong>
    </Tooltip>
  );
  const tooltip2 = (
    <Tooltip id="tooltip1">
      <strong>
        {" "}
        To place an order through us, you need to select the items you wish to
        purchase, choose a payment method, and confirm your order.
      </strong>
    </Tooltip>
  );
  const windowScroll = () => {
    window.scrollTo(0, 500);
  };

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
        </div>

        <ul className={css.footer__nav}>
          {/* <li className={css.nav__item}>
          <h2 className={css.nav__title}>FAQ</h2>

          <ul className={css.nav__ul}>
            <li>
              <OverlayTrigger placement="bottom" overlay={tooltip}>
                <a href="#">Do you accept party orders?</a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger placement="bottom" overlay={tooltip1}>
                <a href="#">
                  Is it safe to enter my payment information on the online
                  ordering system?{" "}
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger placement="bottom" overlay={tooltip2}>
                <a href="#">
                  How do I place an order through the online ordering system?
                </a>
              </OverlayTrigger>
            </li>
            <li></li>
          </ul>
        </li> */}

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
            <address>
              #603 Old San Francisco Road, Sunnyvale, CA-94086
              <br />
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
                  href="https://wa.link/pde07x"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact ☎️
                </a>
              </p>
            </address>
          </li>
        </ul>

        <div className={css.legal}>
          <p>
            © 2023 by Dmarc Creation. Coded and secured by{" "}
            <a href="https://www.aavians.com/" target="_blank" rel="noreferrer">
              AAVIANS
            </a>
          </p>
        </div>
      </footer>
      <div className={css.button_sticky} onClick={windowScroll}>
        <i className="fa fa-cutlery"></i>Order Online
      </div>
    </>
  );
}
