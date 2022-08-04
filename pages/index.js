import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [printV, setPrintV] = useState("");
  const printDoc = () => {
    axios.post("./api/hello", { data: printV }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className={styles.container}>
      <input type="text" onChange={(e) => setPrintV(e.target.value)} />
      <p>{printV}</p>
      <button onClick={printDoc}>--------------printer--------------</button>
    </div>
  );
}
