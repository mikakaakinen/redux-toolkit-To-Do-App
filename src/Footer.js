/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

const Footer = () => {
  return (
    <header
      css={{
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "10px",
        color: "#000",
        backgroundColor: "#FFCB05",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <h3>
        Made with
        <span
          css={{
            color: "#ff0000",
          }}
        >
          {" "}
          &hearts;
        </span>{" "}
        in Riihim&auml;ki, Finland
      </h3>
    </header>
  );
};

export default Footer;
