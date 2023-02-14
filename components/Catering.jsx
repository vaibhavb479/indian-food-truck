import Image from "next/image";
import css from "../styles/Catering.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s4 from "../assets/s4.png";
import chole from "../assets/New Folder/chole.jpg";
import chai from "../assets/New Folder/chai.jpg";
import catering from "../assets/images.png";
import man from "../assets/serve.png";

import { Center } from "@mantine/core";

export default function Services() {
  const menuList = [
    {
      img: chole,
      name: "Veg Curry",
      smallTray: "$40",
      halfTray: "$60",
      mediumTary: "$100",
      fullTray: "$120",
    },
    {
      img: chole,
      name: "Veg Curry",
      smallTray: "$40",
      halfTray: "$60",
      mediumTary: "$100",
      fullTray: "$120",
    },
    {
      img: chole,
      name: "Veg Curry",
      smallTray: "$40",
      halfTray: "$60",
      mediumTary: "$100",
      fullTray: "$120",
    },
    {
      img: chole,
      name: "Veg Curry",
      smallTray: "$40",
      halfTray: "$60",
      mediumTary: "$100",
      fullTray: "$120",
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
        <div className="container-fluid">
          <div className="row mt-5  cateringSec">
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
              className="col-md-12 card p-2 table-responsive"
              style={{ border: "3px solid white" }}
            >
              <table
                className="table"
                style={{ textAlign: "Center", color: "#fff" }}
              >
                <thead className="">
                  <tr>
                    <th>Image</th>
                    <th>Menu</th>
                    <th>Small Tray</th>
                    <th>Half Tray</th>
                    <th>Medium Tray</th>
                    <th>Full Tray</th>
                  </tr>
                </thead>
                <tbody>
                  {menuList.map((item, index) => (
                    <tr data-index={index}>
                      <td>
                        <div className="">
                          <Image
                            src={item.img}
                            alt=""
                            width="40px"
                            height="30px"
                          />
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.smallTray}</td>
                      <td>{item.halfTray}</td>
                      <td>{item.mediumTary}</td>
                      <td>{item.fullTray}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
