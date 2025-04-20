import { useRef, useState } from "react";
import "../App.css";

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
    <div>
      <p>Upload Avatar</p>
      <div
        htmlFor=""
        className="border-2 border-dashed border-(--Neutral-500) bg-(--input-bg) p-4 relative"
      >
        <div className="centerComponent">
          <input
            type="file"
            onChange={handleAvatar}
            required
            accept=".jpg, .jpeg, .png"
            ref={fileUpload}
            className=""
          />
        </div>
        <div className="centerComponent absolute left-45 top-3">
          <img src="../src/assets/images/icon-upload.svg" alt="upload icon" />
        </div>
        <span>Drag and drop or click to upload</span>
      </div>
      <p>
        <span>
          <img src="../src/assets/images/icon-info.svg" alt="info icon" />
          {isSizeValid === true
            ? "Upload your photo (JPG OR PNG, max size: 500kb)."
            : "File too large. Please upload a photo under 500KB"}
        </span>
      </p>
    </div>
  );
}
