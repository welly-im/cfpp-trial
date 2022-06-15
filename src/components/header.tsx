import React from "react";
import { Image } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Image
          className="rounded mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Aladin.png"
          style={{ width: "10rem" }}
        />
      </div>
    </>
  );
};
