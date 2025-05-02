import { Title, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function F404Page() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to accredible.com
    window.location.href = "https://www.accredible.com";
  }, []);

  return <div className=""></div>;
}

export default F404Page;
