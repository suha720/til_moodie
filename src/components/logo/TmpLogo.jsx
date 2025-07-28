import React from "react";
import { Logo } from "../../pages/moodie/Moodie.style";
import { Link } from "react-router-dom";

function TmpLogo() {
  return (
    <Logo>
      <Link to={"/"}>
        {" "}
        <img src="/logo2.svg" alt="Moodie Logo" width={80} />
      </Link>
    </Logo>
  );
}

export default TmpLogo;
