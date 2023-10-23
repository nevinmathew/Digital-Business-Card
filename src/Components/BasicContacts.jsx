import React from "react"
import '../App.css';

const email = "mailto:john.doe@example.com";
const linkedin = "https://www.linkedin.com/in/john.doe";

export default function BasicContacts(){
    return (
        <div className="btn-toolbar basic-contacts">
            <button type="button" className="btn btn-primary" onClick={() => window.open(email, '_blank')}><i className="bi bi-envelope"></i> Email</button>
            <button type="button" className="btn btn-secondary" onClick={() => window.open(linkedin, "_blank")}><i className="heroicons-linkedin"></i> LinkedIn</button>
        </div>
    )
}