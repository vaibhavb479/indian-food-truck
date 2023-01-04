import css from "../styles/About.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s6 from "../assets/s6.png";
import s5 from "../assets/s5.png";
import s4 from "../assets/s4.png";
import foodTruck2 from "../assets/foodTruck-2.jpg";
import foodTruck4 from "../assets/foodTruck-4.jpg";
import foodTruck5 from "../assets/foodTruck-5.jpg";
import foodTruck6 from "../assets/foodTruck-6.jpg";
import foodTruck7 from "../assets/foodTruck-7.jpg";
import foodTruck8 from "../assets/foodTruck-8.jpg";
import foodTruck9 from "../assets/foodTruck-9.jpg";
import foodTruck11 from "../assets/foodTruck-11.jpg";
import foodTruck13 from "../assets/foodTruck-13.jpg";
import foodTruck14 from "../assets/foodTruck-14.jpg";
import foodTruck15 from "../assets/foodTruck-15.jpg";
import foodTruck16 from "../assets/foodTruck-16.jpg";
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
        {/* <div className={css.marqueeTag}> */}
        <div className="col-md-12 mt-5">
          {/* <marquee  direction="right"> */}
          <Image src={foodTruck16} alt="" layout="intrinsic" />
          {/* </marquee> */}
        </div>
      </section>
      <section className="mt-5 p-20">
        <div className="col-md-12">
          <h5 className="text-center">ABOUT US</h5>
        </div>
        <div className="row col-md-12 mt-4">
          <div className="col-md-6 col-lg-4 col-xl-4 col-xs-1 col-sm-12">
            <div className={css.aboutImg}>
              <Image
                src={foodTruck6}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-8 col-xl-8 col-xs-8 col-sm-12">
            We are group of professional chefs decide to open a small restaurant
            operation here in Sunnyvale, believed in ourselves to maintain
            Quality and Affordability in concern we came out with idea having
            food truck at the same time be different than any other restaurants
            or food truck to combine menu from all over India, should make it
            looks like this is everyone’s spot as we all thrive for street foods
            and best Chai we also had the same missing feel. “INDIAN STREET FOOD
            TRUCK” is one of the must try spot where you all should stop by and
            give us your support.
          </div>
        </div>
      </section>


{/* <section className="mt-5 p-20">
        <div className="col-md-12">
          <h5 className="text-center">ABOUT US</h5>
        </div>
        <div className={css.profileArea}>
          <div className="container aboutContainer">
         <div className="row">
          <div className="col-md-12">
          <div className="card">
          
              <Image
              className="img1"
                src={foodTruck4}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
             
              <div className="img2">
                <Image
               
                src={foodTruck6}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
              </div>
            
          <div className="main-text">
            We are group of professional chefs decide to open a small restaurant
            operation here in Sunnyvale, believed in ourselves to maintain
            Quality and Affordability in concern we came out with idea having
            food truck at the same time be different than any other restaurants
            or food truck to combine menu from all over India, should make it
            looks like this is everyone’s spot as we all thrive for street foods
            and best Chai we also had the same missing feel. “INDIAN STREET FOOD
            TRUCK” is one of the must try spot where you all should stop by and
            give us your support.
          </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </section> */}

      {/* <section className="mt-3 p-20">
 
 <div className="col-md-12">
        <h4 className="text-center">You May Know Also 🍒</h4>
      </div>

      <div className="row col-md-12 mt-4">
    
      <Carousel responsive={responsive}>

  <div className="p-2">  
    <Image src={vadapav} alt="" objectFit="cover" layout="intrinsic" />
    <span>Vadapav</span>
  </div>
  <div className="p-2">  
    <Image src={vadapav} alt="" objectFit="cover" layout="intrinsic" />
    <span>Vadapav</span>
  </div>
  <div className="p-2">  
    <Image src={vadapav} alt="" objectFit="cover" layout="intrinsic" />
    <span>Vadapav</span>
  </div>
  <div className="p-2">  
    <Image src={vadapav} alt="" objectFit="cover" layout="intrinsic" />
    <span>Vadapav</span>
  </div>
  <div className="p-2">  
    <Image src={vadapav} alt="" objectFit="cover" layout="intrinsic" />
    <span>Vadapav</span>
  </div>
</Carousel>

          
      </div>
    
 </section> */}

      <section className="mt-5 p-20">
        <div className="col-md-12">
          <h4 className="text-center">INDIAN FOOD TRUCKS</h4>
        </div>

        <div className="row mt-5">
          <Carousel responsive={responsive}>
            {/* <div className={css.ImageWrapperfoodTruck}>  
    <Image src={foodTruck1} alt="" objectFit="cover" layout="intrinsic" />
  </div> */}
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck2}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            {/* <div className={css.ImageWrapperfoodTruck}>  
    <Image src={foodTruck3} alt="" objectFit="cover" layout="intrinsic" />
  </div> */}
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
            {/* <div className={css.ImageWrapperfoodTruck}>  
    <Image src={foodTruck10} alt="" objectFit="cover" layout="intrinsic" />
  </div> */}
            <div className={css.ImageWrapperfoodTruck}>
              <Image
                src={foodTruck11}
                alt=""
                objectFit="cover"
                layout="intrinsic"
              />
            </div>
            {/* <div className={css.ImageWrapperfoodTruck}>  
    <Image src={foodTruck12} alt="" objectFit="cover" layout="intrinsic" />
  </div> */}
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
      <section className="mt-5">
        <div className="col-md-12 text-center">
          <h5>WHY INDIAN STREET FOOD TRUCK</h5>
        </div>

        {/* feature */}
        <div className={css.services}>
          <div className={css.feature}>
            <div className={css.ImageWrapper}>
              <Image src={s6} alt="" objectFit="cover" layout="intrinsic" />
            </div>

            <span>We are Chefs operating business</span>
          </div>

          <div className={css.feature}>
            <div className={css.ImageWrapper}>
              <Image src={s5} alt="" objectFit="cover" layout="intrinsic" />
            </div>

            <span>Hygiene is our first priority to serve you.</span>
          </div>

          {/* <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s4} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Made everything fresh as we are small operation.</span>
        </div> */}

          <div className={css.feature}>
            <div className={css.ImageWrapper}>
              <Image src={s4} alt="" objectFit="cover" layout="intrinsic" />
            </div>
            <span>Competing prices for your affordable meal.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
