import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import ContactCard from "./components/ContactCard.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setContacts(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/api/insert", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    });

    setContacts([
      ...contacts,
      { firstName: firstName, lastName: lastName, phone: phone },
    ]);
    alert("Successful Contact Added");
  };


  const deleteContact = (number) => {
    Axios.delete(`http://localhost:3001/api/delete/${number}`)
  }

  return (
    <>
      <div className="form">
        <h2>Add a New Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            required
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            required
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label>Phone Number</label>
          <input
            type="number"
            required
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <button>Add Contact</button>
        </form>
      </div>

      <div className="contacts">
        <h1>Contacts</h1>
        {contacts?.length > 0 ? (
          <div className="container">
            {contacts.map((contact) => (
              <div className="contact-card">
                <div className="name-phone">
                  <div className="name">
                    <p>{`${contact.firstName} ${contact.lastName}`}</p>
                  </div>
                  <div className="phone">
                    <p>{contact.phone}</p>
                  </div>
                </div>
                <button
                onClick={() => {deleteContact(contact.phone)}}>Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>No contacts found</h2>
          </div>
        )}
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Phone Book App</h1>
//       <Form />
//       <Contacts />
//     </div>
//   );
// }

export default App;
