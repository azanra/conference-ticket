import "../App.css";

export default function Ticket({ ticket }) {
  return (
    <div className="centerComponent ticketBg">
      <div>
        <div className="flex">
          <img src="../src/assets/images/logo-mark.svg" alt="Conference mark" />
          <div>
            <h2>Coding Conf</h2>
            <p>
              {ticket.date} / {ticket.location}
            </p>
          </div>
        </div>
        <div className="flex h-[100px]">
          <img
            src={ticket.avatar}
            alt="Person image"
            className="h-auto max-w-full"
          />
          <div>
            <h2>{ticket.fullName}</h2>
            <div className="flex">
              <img
                src="../src/assets/images/icon-github.svg"
                alt="Github icon"
              />
              <p>{ticket.githubUsername}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>{ticket.ticketId}</p>
      </div>
    </div>
  );
}
