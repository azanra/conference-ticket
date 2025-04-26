import { useState } from "react";
import "./App.css";
import Form from "./component/form.jsx";

const initialTicket = {
  avatar: null,
  fullName: "John Doe",
  email: "JohnDoe@gmail.com",
  githubUsername: "@johnDoe",
  ticketId: null,
  date: "Jan 31, 2025",
  location: "Austin, TX",
};

function App() {
  const [status, setStatus] = useState("draft");
  const [ticket, setTicket] = useState(initialTicket);
  function handleTicket(value) {
    setTicket(value);
  }
  return (
    <div className="h-screen w-screen bg-wallpaper text-(--Neutral-0) p-10">
      <Form
        ticket={ticket}
        status={status}
        handleTicket={handleTicket}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
