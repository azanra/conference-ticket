export default function Input({
  template = { type: "text", label: "", inputPlaceholder: "", section: "" },
  ticket,
  handleTicket,
}) {
  function handleInput(e) {
    handleTicket({
      ...ticket,
      [template.section]: e.target.value,
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="input">{template.label}</label>
      </div>
      <input
        type={template.type}
        id="input"
        name={template.label}
        minLength="4"
        maxLength="32"
        placeholder={template.inputPlaceholder}
        required
        onChange={handleInput}
      />
    </div>
  );
}
