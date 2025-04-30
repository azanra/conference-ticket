# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed (using built in html validation)
  - The email address is not formatted correctly (using built in html validation)
  - The avatar upload is too big
- See the generated conference ticket when they successfully submit the form
- See hover state for all interactive elements on the page

### Screenshot

![](./src/assets/images/cc-ticket.png)

![](./src/assets/images/cc-result.png)

### Links

- Live Site URL: [url](https://azanra.github.io/conference-ticket/)

## My process

### Built with

- React with vite and tailwind for styling

### What I learned

lifting state up to coordinate between between multiple component and share a state. by putting the state in the common parent. and passing the state and event handler to the child component mean it controlled component because the child behaviour depending on the parent. while in the avatarUpload they are controlled and uncontrolled at the same time because the state and handle are passed from the parent and they also have local state to check whether the size of file input is valid or not.

Handling input file and accessing the file itself to create preview image and validating the input file size. also using ref hook to access the dom element diretly to reset the value of input file

```js
const [isSizeValid, setIsSizeValid] = useState(true);
const fileUpload = useRef(null);
function handleAvatar(e) {
  const avatarFile = e.target.files[0];
  if (e.target.files[0].size < 500000) {
    const url = URL.createObjectURL(avatarFile);
    handleTicket({
      ...ticket,
      avatar: url,
    });
    setIsSizeValid(true);
  } else {
    fileUpload.current.value = "";
    setIsSizeValid(false);
  }
}
```

Creating custom input file, by hiding it default appearance and style the pseudo element that stacked on top of the input file

```css
.customFileInput {
  color: transparent;
}

.customFileInput::-webkit-file-upload-button {
  visibility: hidden;
}

.customFileInput::before {
  content: " ";
  background: no-repeat url("./assets/images/icon-upload.svg");
  background-position: center;
  height: 50px;
  width: 50px;
  display: inline-block;
  margin-left: 115px;
  border-radius: 10px;
  border: 1px solid var(--Neutral-700);
  background-color: var(--Neutral-700);
  margin-bottom: 20px;
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

- Render the file uploaded on top of the input file
- Validate the form with javascript

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/custom-file-input-styling-webkitblink/) - As a base for styling custom file input
