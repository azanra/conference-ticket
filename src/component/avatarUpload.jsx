export default function AvatarUpload() {
  return (
    <>
      <p>Upload Avatar</p>
      <label htmlFor="">
        <input type="file" />
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
