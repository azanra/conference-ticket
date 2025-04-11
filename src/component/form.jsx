import Body from "./body.jsx";
import Header from "./header.jsx";

export default function Form({ ticket, status }) {
  return (
    <>
      <form>
        <Header status={status} ticket={ticket} />
        <Body>Secure your spot at next year's biggest coding conference.</Body>
      </form>
    </>
  );
}
