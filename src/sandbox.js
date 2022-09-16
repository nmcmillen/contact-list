// function App() {
//   return (
//     <div className="App">
//       <h1>Phone Book App</h1>
//       <Form />
//       <Contacts />
//     </div>
//   );
// }

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