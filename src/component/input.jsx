export default function Input({
  template = {
    type: "text",
    label: "",
    inputPlaceholder: "",
    section: "",
    title: "",
  },
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
    <div className="w-[400px] mb-5">
      <div className="mb-3">
        <label htmlFor="input">{template.label}</label>
      </div>
      <div>
        <input
          type={template.type}
          id="input"
          name={template.label}
          minLength="4"
          maxLength="32"
          placeholder={template.inputPlaceholder}
          required
          onChange={handleInput}
          title={template.title}
          className="inputElement"
        />
      </div>
    </div>
  );
}
