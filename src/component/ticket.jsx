import "../App.css";
import LogoMark from "../assets/images/logo-mark.svg";
import LogoGit from "../assets/images/icon-github.svg";

export default function Ticket({ ticket }) {
  return (
    <div className="centerComponent ticketBg">
      <div className="w-[600px] h-[250px]">
        <div className="flex">
          <img
            src={LogoMark}
            alt="Conference mark"
            className="pl-6 pt-2 pr-6 w-[90px] h-[80px]"
          />
          <div>
            <h2 className="text-4xl pt-4 pb-4 font-bold">Coding Conf</h2>
            <p>
              {ticket.date} / {ticket.location}
            </p>
          </div>
        </div>
        <div className="flex h-[100px] mt-12">
          <img
            src={ticket.avatar}
            alt="Person image"
            className="h-auto max-w-full pl-6 pr-6 rounded-[20px]"
          />
          <div>
            <h2 className="text-3xl mb-2">{ticket.fullName}</h2>
            <div className="flex">
              <img src={LogoGit} alt="Github icon" />
              <p className="text-lg ml-2">@{ticket.githubUsername}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute right-173 rotate-90">{ticket.ticketId}</p>
    </div>
  );
}
