import "../App.css";

export default function Body({ status, ticket }) {
  const { email } = ticket;
  if (status === "draft") {
    return <p>Secure your spot at next year's biggest coding conference.</p>;
  }
  return (
    <>
      <p>
        We've emailed your ticket to{" "}
        <span className="text-(--Gradient-text-first)">{email}</span> and will
        send updates in the run up to the event.
      </p>
    </>
  );
}
