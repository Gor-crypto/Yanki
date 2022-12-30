import React, { useEffect, useState } from "react";
import styles from "./App.css";

export default function Error() {
  const [err, setErr] = useState([]);
  useEffect(() => {
    fetch("https://retoolapi.dev/UhyfYV/data")
      .then((response) => response.json())
      .then((error) => setErr(error));
  }, []);
  return (
    <div>
      {err.length &&
        err.map((item) => (
          <div key={item.id}>
            <img src={item.Error404} alt="" className="bg_err" />
          </div>
        ))}
    </div>
  );
}
