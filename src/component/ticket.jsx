export default function Ticket({ ticket }) {
  return (
    <div
      style={{
        backgroundImage: 'url("../src/assets/images/pattern-ticket.svg")',
      }}
    >
      <div>
        <div>
          <img src="../src/assets/images/logo-mark.svg" alt="Conference mark" />
          <div>
            <h2>Coding Conf</h2>
            <p>
              {ticket.date} / {ticket.location}
            </p>
          </div>
        </div>
        <div>
          <img src={ticket.avatar} alt="Person image" />
          <div>
            <h2>{ticket.fullname}</h2>
            <div>
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
