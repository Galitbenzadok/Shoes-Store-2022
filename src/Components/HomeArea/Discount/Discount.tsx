import "./Discount.css";

// Interpolation

function Discount(): JSX.Element {


    return (
        <div>

            {isFirst() ? <div className="Discount Box"><span>הפסקה הזו תופיע רק אם היום הוא ה-1 בחודש.</span></div> : <span></span>}			

        </div>
    );
}

function isFirst(): boolean {
   const day = new Date().getDate();  
    console.log(day)  
    return day == 1;
}

export default Discount;
