import Layout from "../components/Layout";
import css from "../styles/Admindash.module.css";
import Admindash from "../components/Admindash";
export default function About() {
  return (
    <Layout className="mt-4">
      <div className={css.container}>
    <Admindash/>
      </div>
     
    </Layout>
  );
}
