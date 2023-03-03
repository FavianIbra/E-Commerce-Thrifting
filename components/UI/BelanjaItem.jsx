import React from "react";
import classes from "../../styles/belanja-item.module.css";
import Image from "next/image";
import Link from "next/link";
import belanja from "../data/belanja";

const BelanjaItem = (props) => {
  const { id, title, img, liveUrl, keyword, description } = props.item;
  return (
    <div className={`${classes.belanja__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.belanja__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.belanja__img}`}>
        <Image alt="portfolio-img" src={img} width="280" height="280" />
      </div>

      <div className={`${classes.primary_btn} bg-transparent`}>
        <button className="primary__btn">
          <Link href={`/${id}`}>Beli</Link>
        </button>
      </div>
    </div>
    
  );
};

export default BelanjaItem;
