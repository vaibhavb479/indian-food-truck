import Image from "next/image";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
// import HeroImage from "../assets/3dBanner.png";
import HeroImage from "../assets/heroSecImg.jpg";
import HeroImageMob from "../assets/heroSecImgMob.jpg";
import { UilPhone } from "@iconscout/react-unicons";
import Tea1 from "../assets/chai.png";
import Link from "next/link";
export default function Hero() {
  return (
    <div className={css.container}>
      <div className="row">
        {/* left side */}
        {/* <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 mb-4 mt-5">
          <div className={css.cherryDiv}>
            <span>More than Faster</span>
            <Image src={Cherry} alt="" width={40} height={25} />
          </div>
          <div className={css.heroText}>
            <span>Welcome to</span>
            <span style={{ color: "var(--themeRed)" }}>Indian Street</span>
            <span> Food Truck</span>
          </div>
          <br />
          <span className={css.miniPara}>
            All Street Food Lovers Are Heartedly Invited 🥘
          </span>
          
        </div> */}

        {/* right side */}

        <div
          className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
          <div className={css.imageContainer}>
          <Image src={HeroImage}   alt="" layout="intrinsic" />
          </div>
          <div className={css.imageContainerMob}>
          <Image src={HeroImageMob}   alt="" layout="intrinsic" />
          </div>
          {/* <div className={css.Tea}>
            <div>
              <Image src={Tea1} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <div className={css.details}>
              <span>Masala Chai</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span> 3
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
