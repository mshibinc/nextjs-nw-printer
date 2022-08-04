import Head from 'next/head'
import Image from 'next/image'
import axios from "axios";
import styles from '../styles/Home.module.css'

export default function Home() {

 

  const printDoc=()=>{
    axios
      .post("./api/hello",{data:"lorem ipsum dhehfgrvf"})
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div className={styles.container}>
      <button onClick={printDoc}>--------------printer--------------</button>
    </div>
  )
}
