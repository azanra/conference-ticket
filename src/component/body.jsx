export default function Body({ status, ticket }) {
  const { email } = ticket;
  if (status === "draft") {
    return <p>Secure your spot at next year's biggest coding conference.</p>;
  }
  return (
    <>
      <p>
        We've emailed your ticket to <span>{email}</span> and will send updates
        in the run up to the event.
      </p>
    </>
  );
}
