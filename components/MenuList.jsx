import css from "../styles/MenuList.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function MenuList({ foods }) {
  const [menuAllTime, setmenuAllTime] = useState("");
  const [menuWrap, setmenuWrap] = useState("");
  const [menuSouth, setmenuSouth] = useState("");
  const [menuChaats, setmenuChaats] = useState("");
  const [menubiryani, setmenubiryani] = useState("");
  const [menuIndo, setmenuIndo] = useState("");

  useEffect(() => {
    for (let i = 0; i < foods.length; i++) {
      if (foods[i].foodCategory == "all-time") {
        setmenuAllTime(true);
      }
      if (foods[i].foodCategory == "wrap") {
        setmenuWrap(true);
      }
      if (foods[i].foodCategory == "south") {
        setmenuSouth(true);
      }
      if (foods[i].foodCategory == "chaats") {
        setmenuChaats(true);
      }
      if (foods[i].foodCategory == "biryani") {
        setmenubiryani(true);
      }
      if (foods[i].foodCategory == "indo") {
        setmenuIndo(true);
      }
    }
  }, []);
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Our Menu 🍒</span>
      </div>
      {menuAllTime ? <div className={css.subheading}>
         <span>All Time</span>
      </div> : ""}
      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          if (food.foodCategory == "all-time") {
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
      {menuAllTime ?  <hr /> : ""}

     

      {/* chaat food */}
      {menuChaats ?<div className={css.subheading}>
        <span></span>
        <span>Chaats</span>
      </div> : ""}

      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          if (food.foodCategory == "chaats") {
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
      {menuChaats ? <hr />: ""}

      
      {menuSouth ? <div className={css.subheading}>
        <span></span>
        <span>South Indian</span> 
      </div>: ""}
      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          if (food.foodCategory == "south") {
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
      {menuSouth ? <hr /> : ""}

      
      {/* biryani */}
      {menubiryani ? <div className={css.subheading}>
        <span></span>
      <span>Biryani</span>
      </div> :''}

      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          if (food.foodCategory == "biryani") {
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
      {menubiryani ? <hr /> : ""}
      
      {menuIndo ? <div className={css.subheading}>
        <span></span>
        <span>Indo-asian</span>
      </div> : ""}

      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          if (food.foodCategory == "indo") {
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
    
      {menuIndo ?   <hr /> : ""}

      {menuWrap ? <div className={css.subheading}>
        <span></span>
      <span>Wraps</span> 
      </div>: ""}

      <div className={css.menu}>
        {/*foods*/}
        {foods.map((food, id) => {
          if (food.foodCategory == "wrap") {
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
