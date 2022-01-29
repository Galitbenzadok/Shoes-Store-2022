import "./Menu.css";
import { NavLink } from "react-router-dom";


function Menu(): JSX.Element {
    return (
        
        <div className="Menu">   
            <NavLink to="/home">דף הבית</NavLink>
            <NavLink to="/products">מוצרים</NavLink>
            <NavLink to="/employees">העובדים שלנו</NavLink>
            <NavLink to="/success-stories/">סיפורי הצלחה</NavLink>
            <NavLink to="/about">מי אנחנו?</NavLink>
            <NavLink to="/contact-us">צרו קשר</NavLink>
        </div>
    );
}

export default Menu;
