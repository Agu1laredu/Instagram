import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

export const Mensajeria = () => (
  <div>
    <MdFavoriteBorder
      style={{
        position: "absolute",
        left: "80%",
        top: "25px",
        fontSize: "30px",
      }}
    />
    <AiOutlineMessage
      style={{
        position: "absolute",
        left: "90%",
        top: "25px",
        fontSize: "30px",
      }}
    />
  </div>
);
