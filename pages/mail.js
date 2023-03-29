import Layout from "../components/Layout";
import css from "../styles/About.module.css";
import Mail from "../components/Mail";
export default function About() {
  return (
    <Layout className="mt-4">
      <div className={css.container}>
    <Mail/>
      </div>
     
    </Layout>
  );
}
