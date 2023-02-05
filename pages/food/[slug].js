import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import css from "../../styles/Food.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

export default function Food({ food }) {
  const src = urlFor(food.image).url();

  const [Category, setCategory] = useState(0);

  const [Quantity, setQuantity] = useState(1);

  //handle quantity

  const handleQuan = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  //add to cart function
  const addFood = useStore((state) => state.addFood);
  const addToCart = () => {
    addFood({
      ...food,
      price: food.price[Category],
      quantity: Quantity,
      category: Category,
    });
    toast.success("Added to Cart");
  };
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/* right side */}

        <div className={css.right}>
          <span>{food.name}</span>
          <span>{food.details}</span>

          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span> {food.price[Category]}
          </span>
          <div className={css.varients}>
            <span>Category</span>
            <div className={css.sizeVarients}>
            {food?.MenuType[0]=='Veg'? 
            <div 
                onClick={() => setCategory(0)}
                className={Category === 0 ? css.selected : ""}
              >
                Veg
              </div>
              :""}
             {food?.MenuType[1]=='Egg'? 
              <div
                onClick={() => setCategory(1)}
                className={Category === 1 ? css.selected : ""}
              >
                Egg
              </div>
              :""}
              {food?.MenuType[2]=='Nonveg'?
              <div 
                onClick={() => setCategory(2)}
                className={Category === 2 ? css.selected : ""}
              >
                Chicken
              </div>
            :""}
            </div>
          </div>

          {/* Quantity Counter */}
          <div className={css.quantity}>
            <span>Quantity</span>

            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("dec")}
              />

              <span>{Quantity}</span>

              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("inc")}
              />
            </div>
          </div>

          {/* Button */}
          {/* <div className={`btn ${css.btn}`} onClick={addToCart}> */}
          <div className="btnColor" onClick={addToCart}>

            Add to Cart
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="food" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const food = await client.fetch(
    `*[_type=="food" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      food,
    },
  };
}
