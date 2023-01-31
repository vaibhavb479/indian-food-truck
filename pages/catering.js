import Layout from "../components/Layout";
import css from "../styles/About.module.css";
import Catering from "../components/Catering";
export default function About() {
  return (
    <Layout className="mt-4">
      <div className={css.container}>
        <Catering />
      </div>
    </Layout>
  );
}
