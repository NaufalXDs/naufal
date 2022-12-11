import { Container } from "postcss";
import Layout from "../components/Layout";

export default function Secret() {
  return (
    <Layout>
      <div className="justify-center items-center flex mt-10">
        <h1>❤ V ❤</h1>
      </div>
      <div className="mt-10 justify-center items-center flex space-x-4 font-Poppin">
        <button onClick={acc} className="rounded-md bg-slate-900 p-2 text-red-600">
          I Love You
        </button>
        <button className="bg-slate-900 p-2 rounded-md text-slate-600" onClick={apansi}>
          Apaansi
        </button>
      </div>
    </Layout>
  );

  function acc() {
    alert("I Love You Too");

    location.assign("https://wa.me/?text=I%20Love%20You%20><");
  }
  function apansi(ini) {
    console.log("NT BRO");
    ini.style.position = "absolute";
    ini.style.left = `${Math.floor(Math.random() * 90)}%`;
    ini.style.top = `${Math.floor(Math.random() * 90)}%`;
  }
}
