import Body from "./body.jsx";
import Header from "./header.jsx";

export default function Form({ ticket, status }) {
  return (
    <>
      <form>
        <Header status={status} ticket={ticket} />
        <Body status={status} ticket={ticket} />
      </form>
    </>
  );
}
