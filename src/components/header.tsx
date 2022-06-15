import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Link to="/home">
          <Image
            className="rounded mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Aladin.png"
            style={{ width: "10rem" }}
          />
        </Link>
      </div>
    </>
  );
};
