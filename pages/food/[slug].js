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
  const [AddOnPrice, setaddonPrice] = useState(0);

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
      price: food.price[Category]+AddOnPrice,
      quantity: Quantity,
      category: Category,
      addonprice: AddOnPrice
    });
    toast.success("Added to Cart");
  };
  const addOnMenuAdd=(addonPrice)=>{
    setaddonPrice(addonPrice);
  }
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
            <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
            {food.price[Category] + AddOnPrice}
          </span>
          <div className={css.varients}>
            <span>Category</span>
            <div className={food?.menuType.length <= '3' ? css.sizeVarients: css.sizeVarients1}>
              {food?.menuType.map((item, index) => (
              
                <div
                  key={item}
                  onClick={() => setCategory(index)}
                  className={Category === index ? css.selected : ""}
                >
                  {item}
                </div>
               
              ))}
        </div>
          </div>
         
          <div className={css.varients}>
            <span>Add On</span>
            <div className={css.sizeVarients}>
           
                <div
                 
                 onClick={() =>addOnMenuAdd(food.addOnPrice)}
                  className={css.selected}
                >
                  <span style={{color:"white"}}>{food.addOn}</span>
                </div>
            
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
