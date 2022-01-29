import axios from "axios";
import { useEffect, useState } from "react";
import ContactModel from "../../../Models/ContactModel";
import config from "../../../Utils/Config";
import "./ContactUs.css";

function ContactUs(): JSX.Element {

    const [contact, setContact] = useState<ContactModel[]>([])

    useEffect(() => {

        (async function () {

            //AJAX:
            const response = await axios.get<ContactModel[]>(config.contactsUrl);

            //Extract the data:
            setContact(response.data);

        })();

    }, [])

    return (
        <div className="ContactUs">
            <h3>צרו קשר</h3>

			{/* {contact.map(e => <EmployeeCard key={e.id} employee={e} />)} */}
            
            {contact.map(e =>
            <div className="Card Box">
                 <div><span className="contactTitles">Name:</span> {e.name}</div>
                 <div><span className="contactTitles">Phone number:</span> {e.phone}</div>
                 <div><span className="contactTitles">Email:</span> <a href={"mailto:" + e.email}>{e.email}</a></div> 
                     
            </div>
           
                 )}


        </div>
    );
}

export default ContactUs;
