import React from "react";
import classes from "../../styles/belanja-item.module.css";
import Image from "next/image";
import Link from "next/link";

const BelanjaItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
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
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>
    </div>
  );
};

export default BelanjaItem;
