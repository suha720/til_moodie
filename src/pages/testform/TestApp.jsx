import React, { useEffect, useState } from "react";
import TMForm from "./TMForm";

function TestApp() {
  const [formState, setFormState] = useState(() => {
    const saved = localStorage.getItem("moodForm");
    return saved
      ? JSON.parse(saved)
      : {
          content: "",
          keywords: [],
          mood: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("moodForm", JSON.stringify(formState));
  }, [formState]);

  return (
    <div>
      <TMForm formState={formState} setFormState={setFormState} />
    </div>
  );
}

export default TestApp;
