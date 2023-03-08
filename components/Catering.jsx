import Image from "next/image";
import css from "../styles/Catering.module.css";
import va from "../assets/New Folder/va.jpg";
import vc from "../assets/New Folder/vc.jpg";
import lcu from "../assets/New Folder/lcu.jpg";
import cc from "../assets/New Folder/cap.jpg";
import ca from "../assets/New Folder/ca.jpg";
import pc from "../assets/New Folder/pc.jpg";
import pa from "../assets/New Folder/pa.jpg";
import mc from "../assets/New Folder/mc.jpg";
import scu from "../assets/New Folder/scu.jpg";
import rice from "../assets/New Folder/rice.jpg";

import catering from "../assets/bflogo.png";
import man from "../assets/serve.png";
import Link from "next/link";
import imageBg from "../assets/b1.jpg";
export default function Services() {
  const menuList = [
    {
      img: va,
      name: "Veg Appetizer",
      priceSmall: "$40",
      priceHalf: "$60",
      priceMedium: "$100",
      priceFull: "$120",
    },
    {
      img: vc,
      name: "Veg Curry",
      priceSmall: "$40",
      priceHalf: "$60",
      priceMedium: "$80",
      priceFull: "$100",
    },
    {
      img: pa,
      name: "Paneer Appetizer",
      priceSmall: "$50",
      priceHalf: "$70",
      priceMedium: "$110",
      priceFull: "$130",
    },
    {
      img: pc,
      name: "Paneer Curry",
      priceSmall: "$50",
      priceHalf: "$70",
      priceMedium: "$110",
      priceFull: "$130",
    },
    {
      img: ca,
      name: "Chicken Appetizer",
      priceSmall: "$40",
      priceHalf: "$50",
      priceMedium: "$100",
      priceFull: "$120",
    },
    {
      img: cc,
      name: "Chicken Curry",
      priceSmall: "$40",
      priceHalf: "$50",
      priceMedium: "$100",
      priceFull: "$120",
    },
    {
      img: mc,
      name: "Goat Curry",
      priceSmall: "$60",
      priceHalf: "$80",
      priceMedium: "$120",
      priceFull: "$160",
    },
    {
      img: lcu,
      name: "Lamb Curry",
      priceSmall: "$60",
      priceHalf: "$80",
      priceMedium: "$120",
      priceFull: "$160",
    },
    {
      img: scu,
      name: "Shrim or Fish Curry",
      priceSmall: "$60",
      priceHalf: "$70",
      priceMedium: "$110",
      priceFull: "$140",
    },
    {
      img: rice,
      name: "Variety Rice",
      priceSmall: "$25",
      priceHalf: "$35",
      priceMedium: "$60",
      priceFull: "$80",
    },
  ];
  return (
    <>
      <div className={css.cateringHeading}></div>

      <section className="features3 cid-s5yYv1LlBg mt-3" id="features03-2">
        <div className="container-fluid">
          <div className="row justify-content-center backgroundColor">
            <div className="col-lg-4 col-md-12 md-pb mobileView">
              <Image src={man} alt="" className="" />
            </div>

            <div className="col-lg-8 col-md-12 align-left my-auto">
              <div className="wrapper">
                <div className="row p0 mbr-white align-left">
                  <div className="col-lg-12">
                    <h3 className="main-title align-left mbr-fonts-style pb-3">
                      <strong>Catering Services</strong>
                    </h3>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          {" "}
                          We do custmized menu From all over India of both Veg
                          and Non-Veg.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          {" "}
                          We do catering from 10 ppl minimum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          We Come on-site catering to your Location and cook
                          Live.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          We provide utensil and Catering wear along with
                          helpers and waitresses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          We do Catering all over Bay-Area.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          We do Breakfast, Brunch, Lunch, Tea time, Dinner.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 col-md-12 col-lg-6 md-pb">
                    <div className="card-wrapper">
                      <span className="mbr-iconfont mobi-mbri-right mobi-mbri"></span>
                      <div className="card-box">
                        <p className="card-text mbr-fonts-style display-7">
                          {" "}
                          Contact us All your Festivals, House, Warming,
                          Weddings, Baby Showers, Birthday Party, Anniversaries,
                          Office, Gatherings, Graduations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features3 cid-s5yYv1LlBg mt-5" id="features03-2">
        <div className="card-body text-white">
          <div className="container-fluid">
            <div className="row cateringSec">
              <div
                className="col-md-12 pt-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={catering}
                  alt=""
                  className="rounded-circle"
                  width="80px"
                  height="80px"
                />
              </div>
              <div
                className="col-md-8 card p-2 table-responsive mb-5"
                style={{
                  boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
                  margin: "auto",
                }}
              >
                <table className="table cateringTable">
                  <thead className="">
                    <tr>
                      <th>Image</th>
                      <th>Menu</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuList.map((item, index) => (
                      <tr key={index} data-index={index}>
                        <td>
                          <div className="">
                            <Image
                              className=""
                              src={item.img}
                              alt=""
                              width="50px"
                              height="30px"
                              style={{
                                boxShadow: "#181818cf 0px 3px 2px -1px",
                              }}
                            />
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          {" "}
                          <Link
                            href={{
                              pathname: "/cateringList",
                              query: item,
                            }}
                            as={`/cateringList`}
                            passHref
                          >
                            <button type="button" className="button-table">
                              View
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
