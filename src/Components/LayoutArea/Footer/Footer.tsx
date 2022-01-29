import "./Footer.css";

function Footer(): JSX.Element {

    const currentYear = (new Date()).getFullYear()

    return (
        <div className="Footer">
            <p>
                &copy; כל הזכויות שמורות לגלית בן צדוק {currentYear}               
            </p>
        </div>
    );
}

export default Footer;

