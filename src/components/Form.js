import { useState, useEffect } from "react";
import "./Form.css";
import Axios from "axios";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/api/insert", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    }).then(() => {
    alert("Successful Contact Added")});
  };

  return (
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
  );
}
