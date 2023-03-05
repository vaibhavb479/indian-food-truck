import { useRouter } from "next/router";
export default function Services() {
  const router = useRouter();
  const menuPlan = router.query;
  console.log("data77", menuPlan);
  return (
    <>
      <div className="row mt-5">
        <div className="planHeading mt-5">
          <strong>
            <h3>{menuPlan.name} Plan</h3>
          </strong>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
          <div className="pricing-table-3 small">
            <div className="pricing-table-header">
              <h4 className="trayHeading">Small Tray</h4>
              {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price">
              <strong>{menuPlan.priceSmall}</strong>
            </div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <li>
                  <i className="">✔️</i>Enough for 10-15 people
                </li>
                <li>
                  <i className="f">✔️</i>Cooked fresh with Hygine
                </li>
              </ul>
              <a
                href="tel:+16693008201"
                target="_blank"
                rel="noreferrer"
                className="view-more"
              >
                Book Order
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
          <div className="pricing-table-3 half">
            <div className="pricing-table-header">
              <h4 className="trayHeading">Half Tray</h4>
              {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price">
              <strong>{menuPlan.priceHalf}</strong>
            </div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <li>
                  <i className="">✔️</i>Enough for 15-20 people
                </li>
                <li>
                  <i className="f">✔️</i> Cooked fresh with Hygine
                </li>
              </ul>
              <a
                href="tel:+16693008201"
                target="_blank"
                rel="noreferrer"
                className="view-more"
              >
                Book Order
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
          <div className="pricing-table-3 medium">
            <div className="pricing-table-header">
              <h4 className="trayHeading">Medium Tray</h4>
              {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price">
              <strong>{menuPlan.priceMedium}</strong>
            </div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <li>
                  <i className="">✔️</i>Enough for 20-30 people
                </li>
                <li>
                  <i className="f">✔️</i> Cooked fresh with Hygine
                </li>
              </ul>
              <a
                href="tel:+16693008201"
                target="_blank"
                rel="noreferrer"
                className="view-more"
              >
                Book Order
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 col-sm-12 col-xm-12 mt-3">
          <div className="pricing-table-3 full">
            <div className="pricing-table-header">
              <h4 className="trayHeading">Full Tray</h4>
              {/* <p>Loerm Ipsum Donor Sit Amet</p> */}
            </div>
            <div className="price">
              <strong>{menuPlan.priceFull}</strong>
            </div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <li>
                  <i className="">✔️</i>Enough for 50-60 people
                </li>
                <li>
                  <i className="f">✔️</i> Cooked fresh with Hygine
                </li>
              </ul>
              <a
                href="tel:+16693008201"
                target="_blank"
                rel="noreferrer"
                className="view-more"
              >
                Book Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
