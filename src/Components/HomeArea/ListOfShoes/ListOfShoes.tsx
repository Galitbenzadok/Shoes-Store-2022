import ShoeCard from "../ShoeCard/ShoeCard";
import "./ListOfShoes.css";
import {ShoesArr} from "../../../Data/ShoesArr"

function ListOfShoes(): JSX.Element {

    return (
        <div>           
             <h1>הדגמים שלנו</h1>
             <br></br>
             <div  className="ListOfShoes">                
                {ShoesArr.map(item =>
                   <ShoeCard key={item.id} model={item.model} size={item.size} price={item.price} img={item.img}></ShoeCard>                    
                )}
            </div>                                 
        </div>
    );
}

export default ListOfShoes;


