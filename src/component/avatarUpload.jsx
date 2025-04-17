import { useRef, useState } from "react";

export default function AvatarUpload({ ticket, handleTicket }) {
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

  return (
    <>
      <p>Upload Avatar</p>
      <label htmlFor="">
        <input
          type="file"
          onChange={handleAvatar}
          required
          accept=".jpg, .jpeg, .png"
          ref={fileUpload}
        />
        <div>
          <img src="../src/assets/images/icon-upload.svg" alt="upload icon" />
        </div>
        <span>Drag and drop or click to upload</span>
      </label>
      <p>
        <span>
          <img src="../src/assets/images/icon-info.svg" alt="info icon" />
          {isSizeValid === true
            ? "Upload your photo (JPG OR PNG, max size: 500kb)."
            : "File too large. Please upload a photo under 500KB"}
        </span>
      </p>
    </>
  );
}
