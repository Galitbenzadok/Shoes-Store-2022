import Discount from "../Discount/Discount";
import ListOfShoes from "../ListOfShoes/ListOfShoes";
import MainVideo from "../MainVideo/MainVideo";
import RandomBrand from "../RandomBrand/RandomBrand";

import "./Home.css";

function Home(): JSX.Element {   

    return (
        <div className="Home">
            <div>
                <Discount />
                <MainVideo /> 
            </div>
            {/* <div className="OurShoes">
                <ListOfShoes />
                <RandomBrand />
            </div> */}
        </div>
    );
}


export default Home;
