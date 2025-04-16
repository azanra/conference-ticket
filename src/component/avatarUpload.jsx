export default function AvatarUpload({ ticket, handleTicket }) {
  function handleAvatar(e) {
    const avatarFile = e.target.files[0];
    const url = URL.createObjectURL(avatarFile);
    handleTicket({
      ...ticket,
      avatar: url,
    });
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
        />
        <div>
          <img src="../src/assets/images/icon-upload.svg" alt="upload icon" />
        </div>
        <span>Drag and drop or click to upload</span>
      </label>
      <p>
        <span>
          <img src="../src/assets/images/icon-info.svg" alt="info icon" />
          Upload your photo (JPG or PNG, max size: 500KB)
        </span>
      </p>
    </>
  );
}
