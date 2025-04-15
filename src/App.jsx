import { useState } from "react";
import "./App.css";
import Form from "./component/form.jsx";

const initialTicket = {
  avatar: null,
  fullName: "John Doe",
  email: "JohnDoe@gmail.com",
  githubUsername: "@johnDoe",
  ticketId: null,
  date: "01/12/2002",
};

function App() {
  const [status, setStatus] = useState("draft");
  const [ticket, setTicket] = useState(initialTicket);
  function handleTicket(value) {
    setTicket(value);
  }
  return (
    <>
      <Form
        ticket={ticket}
        status={status}
        handleTicket={handleTicket}
        setStatus={setStatus}
      />
    </>
  );
}

export default App;
