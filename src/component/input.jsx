export default function Input({
  template = { type: "text", label: "", inputPlaceholder: "" },
}) {
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
      />
    </div>
  );
}
