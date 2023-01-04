import Layout from "../components/Layout";
import css from "../styles/About.module.css";
import AboutUs from "../components/AboutUs";
export default function About() {
  return (
    <Layout className="mt-4">
      <div className={css.container}>
    <AboutUs/>
      </div>
     
    </Layout>
  );
}
