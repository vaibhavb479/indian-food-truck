import Layout from "../components/Layout";
import css from "../styles/Catering.module.css";
import Cateringmenu from "../components/Cateringmenu";
export default function About() {
  return (
    <Layout className="mt-4">
      <div className={css.container}>
        <Cateringmenu />
      </div>
    </Layout>
  );
}
