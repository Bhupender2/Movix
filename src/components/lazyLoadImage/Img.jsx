import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
//lazyloadImage basically ek ek component h jo ki humne react-lazy-load-image-component library se import kiya h  yeh images ko load karne mein help karta h plus thode effects k saath
import "react-lazy-load-image-component/src/effects/blur.css";
// yeh css import ki h iss lazyload component se

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

export default Img;