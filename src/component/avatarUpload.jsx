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
      <p className="mb-3">Upload Avatar</p>
      <div
        htmlFor=""
        className="border-2 border-dashed border-(--Neutral-500) bg-(--input-bg) p-4 relative w-[400px] hover:bg-(--hover-bg)"
      >
        <label className="centerComponent">
          <input
            type="file"
            onChange={handleAvatar}
            required
            accept=".jpg, .jpeg, .png"
            ref={fileUpload}
            className="customFileInput"
          />
        </label>
        <span className="ml-12.5">Drag and drop or click to upload</span>
      </div>
      <div className="mt-3 flex items-center">
        <img src="./src/assets/images/icon-info.svg" alt="info icon" />
        <span
          className={`text-xs ml-3 ${
            isSizeValid ? "text-(--Neutral-500)" : "text-(--Orange-500)"
          }`}
        >
          {isSizeValid === true
            ? "Upload your photo (JPG OR PNG, max size: 500kb)."
            : "File too large. Please upload a photo under 500KB"}
        </span>
      </div>
    </div>
  );
}
