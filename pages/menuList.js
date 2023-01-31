import Layout from "../components/Layout";
import css from "../styles/About.module.css";
import MenuList from "../components/MenuList";
export default function About() {
  return (
    <Layout className="mt-4">
      <div className={css.container}>
        <MenuList />
      </div>
    </Layout>
  );
}
