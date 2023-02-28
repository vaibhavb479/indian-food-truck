import css from "../styles/About.module.css";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Services from "./Services";
import "react-multi-carousel/lib/styles.css";
// import Video from "../assets/video.mp4";
import mango from "../assets/New Folder/mango.jpg";
import chole from "../assets/New Folder/chole.jpg";
import foodTruck2 from "../assets/foodTruck2.png";
import foodTruck4 from "../assets/foodTruck4.png";
import foodTruck5 from "../assets/foodTruck5.png";
import foodTruck6 from "../assets/foodTruck6.png";
import foodTruck7 from "../assets/foodTruck7.png";
import foodTruck8 from "../assets/foodTruck8.png";
import foodTruck9 from "../assets/foodTruck9.png";
import foodTruck11 from "../assets/foodTruck11.png";
import foodTruck13 from "../assets/foodTruck13.png";
import foodTruck14 from "../assets/foodTruck14.png";
import foodTruck15 from "../assets/foodTruck15.png";
import foodTruck16 from "../assets/foodTruck16.png";
import foodTruck17 from "../assets/about-us1.png";
import foodTruck18 from "../assets/illu1.png";
import foodTruck19 from "../assets/illu2.png";
import ReactPlayer from "react-player";
export default function AboutUs() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={css.container}>
      <section className={css.imgSection}>
        <div className="col-md-12 mt-5">
          <Image src={foodTruck17} alt="" layout="intrinsic" />
        </div>
      </section>

      <Services />

      <section className="mt-5 p-20">
        {/* <div className="col-md-12">
          <h5 className="text-center">ABOUT US</h5>
        </div> */}
        <div className="row col-md-12 mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-5 col-lg-3 col-xl-5 col-xs-1 col-sm-10">
            <div className={css.aboutImg}>
              <Image
                src={foodTruck19}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
          </div>

          <div className="col-md-5 col-lg-7 col-xl-6 col-xs-7 col-sm-10 pl-5 m-auto">
            <div className="row">
              <div className="col-md-12 aboutSec2">
                <h3 className="text-center">ABOUT US</h3>
                <p className="text-center">
                  We are group of professional chefs decide to open a small
                  restaurant operation here in Sunnyvale, believed in ourselves
                  to maintain Quality and Affordability in concern we came out
                  with idea having food truck at the same time be different than
                  any other restaurants or food truck to combine menu from all
                  over India, should make it looks like this is everyone’s spot
                  as we all thrive for street foods and best Chai we also had
                  the same missing feel. “INDIAN STREET FOOD TRUCK” is one of
                  the must try spot where you all should stop by and give us
                  your support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
      <section className="mt-5 p-20 mb-5">
        <div className="col-md-12">
          <h4 className="text-center">INDIAN FOOD TRUCK</h4>
        </div>

        <div className="row mt-5">
          <Carousel responsive={responsive}>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck2}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck4}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck5}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck6}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck7}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck8}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck9}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>

            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck11}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>

            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck13}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck14}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck15}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
