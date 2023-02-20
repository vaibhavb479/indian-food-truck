import Image from "next/image";
import css from "../styles/Catering.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s4 from "../assets/s4.png";
import chole from "../assets/New Folder/chole.jpg";
import faluda from "../assets/New Folder/faluda.jpg";
import catering from "../assets/images.png";
import man from "../assets/serve.png";
import { Center } from "@mantine/core";
import Food from "../pages/food/[slug]";
export default function Services() {
    return (
        <>
       <div className="row mt-5">
       <div className="planHeading mt-5"><strong><h3>Plan</h3></strong></div>
       <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
        <div className="pricing-table-3 small">
            <div className="pricing-table-header">
                <h4 className="trayHeading">Small Tray</h4>
                {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price"><strong>$3</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                </ul><a href="#" className="view-more">Buy Plan</a></div>
        </div>
    </div>
    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
        <div className="pricing-table-3 half">
            <div className="pricing-table-header">
                <h4 className="trayHeading">Half Tray</h4>
                {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price"><strong>$8</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                </ul><a href="#" className="view-more">Buy Plan</a></div>
        </div>
    </div>
    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
        <div className="pricing-table-3 medium">
            <div className="pricing-table-header">
                <h4 className="trayHeading">Medium Tray</h4>
                {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price"><strong>$12</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                  
                </ul><a href="#" className="view-more">Buy Plan</a></div>
        </div>
    </div>
    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
        <div className="pricing-table-3 full">
            <div className="pricing-table-header">
                <h4 className="trayHeading">Full Tray</h4>
                {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price"><strong>$3</strong> / MONTH</div>
            <div className="pricing-body">
                <ul className="pricing-table-ul">
                <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i> 25 Small Tray</li>
                    <li><i className="">✔️</i>25 Small Tray</li>
                    <li><i className="f">✔️</i> 25 Small Tray</li>
                </ul><a href="#" className="view-more">Buy Plan</a></div>
        </div>
    </div>
</div>

          </>
    )
}