import css from "../styles/MenuList.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

export default function MenuList({ foods }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Our Menu 🍒</span>
        {/* <span>Menu That Always</span>
        <span>Make You Fall in Love</span> */}
      </div>

      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          const src = urlFor(food.image).url();
          return (
            <div className={css.food} key={id}>
              <Link href={`./food/${food.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{food.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
                {food.price[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
