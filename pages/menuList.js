
import Layout from "../components/Layout"
import css from "../styles/Home.module.css";
import { client } from "../lib/client";
import MenuList from "../components/MenuList";
 import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export default function About({ foods }) {
  
  return (
    <Layout>
      <div className={css.container}>
          <MenuList foods={foods} />
     
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "food"]';
  const foods = await client.fetch(query);
  return {
    props: {
      foods,
    },
  };
};
