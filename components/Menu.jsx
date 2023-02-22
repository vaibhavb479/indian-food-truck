import css from "../styles/Menu.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

export default function Menu({ foods }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Most Preferred Deli🍕</span>
      </div>

      <div className={css.menu}>
        {foods.map((food, id) => {
          if(food.favMenu !=null && food.favMenu !=undefined){
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
        }
        })}
      </div>
    </div>
  );
}
