export default function Header({ status, ticket }) {
  const { fullName } = ticket;
  if (status === "draft") {
    return <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>;
  }
  return (
    <>
      <h1>
        Congrats, <span>{fullName}</span> Your ticket is ready .
      </h1>
    </>
  );
}
