"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedimage, setpickedimage] = useState();
  const imagepicker = useRef();

  function handleclick() {
    imagepicker.current.click();
  }

  function handleimagechange(event) {
    const file = event.target.files[0];
    if (!file) {
        setpickedimage(null)
      return;
    }
    const filereader =new FileReader();

    filereader.onload = () => {
      setpickedimage(filereader.result);
    };

    filereader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedimage && <p>No image picked</p>}
          {pickedimage && <Image src={pickedimage} alt="selected image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imagepicker}
          onChange={handleimagechange}
          required
        />
        <button className={classes.button} type="button" onClick={handleclick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
