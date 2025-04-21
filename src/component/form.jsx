import AvatarUpload from "./avatarUpload.jsx";
import Body from "./body.jsx";
import Header from "./header.jsx";
import Input from "./input.jsx";
import Ticket from "./ticket.jsx";
import "../App.css";

const template = {
  name: {
    type: "text",
    label: "Full Name",
    inputPlaceholder: "",
    section: "fullName",
    title: "Enter your fullname",
  },
  email: {
    type: "email",
    label: "Email Address",
    inputPlaceholder: "example@email.com",
    section: "email",
    title: "Enter valid email address",
  },
  github: {
    type: "text",
    label: "GitHub Username",
    inputPlaceholder: "@yourusername",
    section: "githubUsername",
    title: "Enter your github username",
  },
};

const generateRandomId = (charAmount) => {
  let randomId = ["#"];
  const RANDOM_MULTIPLIER = 10;
  for (let i = 0; i < charAmount; i++) {
    const randomNumber = Math.round(Math.random() * RANDOM_MULTIPLIER);
    randomId.push(randomNumber);
  }
  const randomNumberString = randomId.join("");
  return randomNumberString;
};

export default function Form({ ticket, status, handleTicket, setStatus }) {
  return (
    <>
      <div className="centerComponent mb-16">
        <img src="./src/assets/images/logo-full.svg" alt="Logo images" />
      </div>
      <div className="centerComponent text-xl mb-5">
        <Header status={status} ticket={ticket} />
      </div>
      <div className="centerComponent mb-10 text-xl">
        <Body status={status} ticket={ticket} />
      </div>
      {status === "draft" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("finished");
            const generatedTicketId = generateRandomId(5);
            handleTicket({
              ...ticket,
              ticketId: generatedTicketId,
            });
          }}
        >
          <div className="centerComponent">
            <AvatarUpload ticket={ticket} handleTicket={handleTicket} />
          </div>
          <div className="centerComponent">
            <Input
              template={template.name}
              ticket={ticket}
              handleTicket={handleTicket}
            />
          </div>
          <div className="centerComponent">
            <Input
              template={template.email}
              ticket={ticket}
              handleTicket={handleTicket}
            />
          </div>
          <div className="centerComponent">
            <Input
              template={template.github}
              ticket={ticket}
              handleTicket={handleTicket}
            />
          </div>
          <button type="submit">Generate My Ticket</button>
        </form>
      ) : (
        <Ticket ticket={ticket} />
      )}
    </>
  );
}
