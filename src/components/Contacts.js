import { useState, useEffect } from "react";
import "./Contacts.css";
import Axios from "axios";
import ContactCard from "./ContactCard";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      {contacts?.length > 0 ? (
        <div className="container">
          {contacts.map((contact) => (
            <ContactCard key={contact.phone} contact={contact} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No contacts found</h2>
        </div>
      )}
    </div>
  );
}
