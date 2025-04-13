import AvatarUpload from "./avatarUpload.jsx";
import Body from "./body.jsx";
import Header from "./header.jsx";
import Input from "./input.jsx";

const template = {
  name: {
    type: "text",
    label: "Full Name",
    inputPlaceholder: "",
  },
  email: {
    type: "email",
    label: "Email Address",
    inputPlaceholder: "example@email.com",
  },
  github: {
    type: "text",
    label: "GitHub Username",
    inputPlaceholder: "@yourusername",
  },
};

export default function Form({ ticket, status }) {
  return (
    <>
      <form>
        <Header status={status} ticket={ticket} />
        <Body status={status} ticket={ticket} />
        <AvatarUpload />
        <Input template={template.name} />
        <Input template={template.email} />
        <Input template={template.github} />
      </form>
    </>
  );
}
