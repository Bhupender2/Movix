import React, { useRef } from "react"; //useRef is a hook kisi bhi dom mein se kisi bhi element ko select karne ka tareeka hota h useRef k through div k andar ref={} ese use karte h hum
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"; // yeh corousel k left right arrows h
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; //date ka format change karne k liye use karte h yeh

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home); //or jo url hum store se vo lelenge hum useSelector ki help se
  const navigate = useNavigate();
  const navigation = (dir) => {};
  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />

        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path : PosterFallback;

              return (
                <div
                 key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <img src={posterUrl} />
                  </div>
                </div>
              )
            })}
            // ab hum server k data k andar map chala rahe h toh opitional chaining bht important {} llgaenge coz humein ek variable bhi create karna h
          </div>
        ) : (
          <span>Loading.... </span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
