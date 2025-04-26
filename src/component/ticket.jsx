import "../App.css";

export default function Ticket({ ticket }) {
  return (
    <div className="centerComponent ticketBg">
      <div className="w-[600px] h-[250px]">
        <div className="flex">
          <img
            src="../src/assets/images/logo-mark.svg"
            alt="Conference mark"
            className="pl-6 pt-2 pr-6 w-[90px] h-[80px]"
          />
          <div>
            <h2 className="text-4xl pt-4 pb-4">Coding Conf</h2>
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
      <p className="absolute right-50 rotate-90">{ticket.ticketId}</p>
    </div>
  );
}
