import st from "./ButtonBuilt.module.css";
export default function ButtonBuilt({ t }: any): JSX.Element {
  

  return (
    <button className={st.button}>{t}</button>
  );
}

