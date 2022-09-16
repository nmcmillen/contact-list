import React from "react";
import "./ContactCard.css";

export default function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="name-phone">
        <div className="name">
          <p>{`${contact.firstName} ${contact.lastName}`}</p>
        </div>
        <div className="phone">
          <p>{contact.phone}</p>
        </div>
      </div>
      <button>delete</button>
    </div>
  );
}
