import React from "react";
import "./RandomBrand.css";
import { useEffect, useState } from "react";
import {ShoesArr} from "../../../Data/ShoesArr"
import ShoeCard from "../ShoeCard/ShoeCard";


function RandomBrand(): JSX.Element {

    const [randomShoe, setRandomShoe] = useState(ShoesArr[0]);

    useEffect(() => {
        
        const timerId = setInterval(() => {
        const randomShoe = ShoesArr[Math.floor(Math.random()*ShoesArr.length)];                
        setRandomShoe(randomShoe);        
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

      return (
        
        <div>
            <ShoeCard key={randomShoe.id} model={randomShoe.model} size={randomShoe.size} price={randomShoe.price} img={randomShoe.img} />                              
        </div>
               
    );
}

export default RandomBrand;
