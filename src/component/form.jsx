import AvatarUpload from "./avatarUpload.jsx";
import Body from "./body.jsx";
import Header from "./header.jsx";
import Input from "./input.jsx";
import Ticket from "./ticket.jsx";

const template = {
  name: {
    type: "text",
    label: "Full Name",
    inputPlaceholder: "",
    section: "fullName",
  },
  email: {
    type: "email",
    label: "Email Address",
    inputPlaceholder: "example@email.com",
    section: "email",
  },
  github: {
    type: "text",
    label: "GitHub Username",
    inputPlaceholder: "@yourusername",
    section: "githubUsername",
  },
};

export default function Form({ ticket, status, handleTicket, setStatus }) {
  return (
    <>
      <Header status={status} ticket={ticket} />
      <Body status={status} ticket={ticket} />
      {status === "draft" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("finished");
          }}
        >
          <AvatarUpload ticket={ticket} handleTicket={handleTicket} />
          <Input
            template={template.name}
            ticket={ticket}
            handleTicket={handleTicket}
          />
          <Input
            template={template.email}
            ticket={ticket}
            handleTicket={handleTicket}
          />
          <Input
            template={template.github}
            ticket={ticket}
            handleTicket={handleTicket}
          />
          <button type="submit">Generate My Ticket</button>
        </form>
      ) : (
        <Ticket ticket={ticket} />
      )}
    </>
  );
}
