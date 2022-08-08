import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [printV, setPrintV] = useState("");
  const printDoc = () => {
    axios.get('/api/printers').then(res => {
      // console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
    // axios
    //   .post(
    //     "./api/hello",
    //     { data: {printText:printV,ip:'192.168.1.250'} },
    //     { headers: { "Content-Type": "application/json" } }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // fetch("./api/hello", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({data: printV}),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  return (
    <div className={styles.container}>
      <h2>v-1</h2>
      <input type="text" onChange={(e) => setPrintV(e.target.value)} />
      <p>{printV}</p>
      <button onClick={printDoc}>--------------printer--------------</button>
    </div>
  );
}
