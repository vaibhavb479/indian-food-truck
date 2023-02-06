import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s4 from "../assets/s4.png";

export default function Services() {
  return (
    <div className="row">
      <div className={css.heading}>
        <span>What We Serve?</span>
        <span>We Serve Happiness 🍟</span>
        <span>Happy Thanks giving & with all your Blessing & Support</span>
      </div>

      {/* feature */}
      <div className="row col-md-12 text-center mt-5">
        <div className="col-md-4 mb-4">
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <h5>Professional Chefs</h5>
          <span className={css.subText}>
            We are Chefs operating business, Made everything fresh.
          </span>
        </div>
        <div className="col-md-4 mb-4">
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <h5>Pocket Friendly</h5>
          <span className={css.subText}>
            Competing prices for your affordable meal.
          </span>
        </div>

        <div className="col-md-4 mb-4">
          <div className={css.ImageWrapper}>
            <Image src={s4} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <h5>Free Delivery</h5>
          <span className={css.subText}>
            Free delivery options for your gatherings.
          </span>
        </div>
      </div>
    </div>
  );
}
