import React from "react";
import ball from "./ball.png";
// import "./Card.css";
const PokemonCard = ({ id, image, name, type, ability, height, weight }) => {
  const style = type + " card";
  return (
    <>
      <div className={style}>
        <div className=" image-card flex justify-center items-center ">
          <img src={image} alt="" className="" />
        </div>
        <div className="detail absolute bottom-1  left-[50%] -translate-x-[60%] hidden">
          <div className=" flex justify-between items-center gap-1.5">
            <img src={ball} alt="" className="w-5" />
            <h1 className="capitalize text-xl">{name}</h1>
            <div className=" capitalize bg-slate-600 w-auto px-2 py-1 rounded-lg text-slate-100">
              {type}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={style}>
        <div className="number">
          <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div> */}
    </>
  );
};

export default PokemonCard;
