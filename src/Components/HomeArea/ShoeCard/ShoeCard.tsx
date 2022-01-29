import "./ShoeCard.css";

  interface ShoeProps {
    model: string;
    size: number;
    price: number;
    img: string;
}

function ShoeCard(props: ShoeProps): JSX.Element {
    return (
        <div className="ShoeCard ShoeBox">
            <div>
                 <h3> דגם: {props.model}</h3>    
                <img src={props.img} className="imgDiv"></img>   
            </div>    
            <div>  
                מידה: {props.size} <br></br><br></br>          
                מחיר: $ {props.price}
           </div> 
       
        </div>
    );
}

export default ShoeCard;


