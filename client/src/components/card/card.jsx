import React from "react";
import { NavLink } from "react-router-dom";
import style from "./card.module.css";
// import { useDispatch } from "react-redux";
// import { deleteProductsById } from "../../redux/actions";

export default function Card({
  id,
  name,
  href,
  imageSrc,
  imageAlt,
  price,
  stock,
  brand,
  category,
  description,
}) {
  // aca va let dispatch = useDispatch();

  // aca va const handleClose = () => { dispatch(deleteProductsById(id))}

  const formatPriceWithDots = (price) => {
    return price.toLocaleString();
  };

  return (
    <div className={style.card}>
      <NavLink
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={style.img_container}>
          <img className={style.card__img} src={imageSrc} alt={imageAlt} />
        </div>
        <div className={style.container_name}>
          <p className={style.ht}>{name}</p>
        </div>
        <div className={style.container_data}>
          {/* <span className={style.price}>${price}</span> */}
          <span className={style.price}>${formatPriceWithDots(price)}</span>
          <p className={style.texts}>{brand}</p>
          <p className={style.texts}>{category}</p>
        </div>
        <p className={style.stock}>Stock disponible {stock}</p>
      </NavLink>
    </div>
  );
}
