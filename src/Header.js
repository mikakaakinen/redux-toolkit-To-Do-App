/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

const Header = () => {
  return (
    <header
      css={{
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "#000",
        backgroundColor: "#FFCB05",
        width: "100%",
        maxWidth: "100%",
        marginBottom: "30px",
      }}
    >
      <h1
        css={{
          marginBottom: "0",
        }}
      >
        TO-DO-APP
      </h1>
      <h2>Made with Redux Toolkit</h2>
    </header>
  );
};

export default Header;
