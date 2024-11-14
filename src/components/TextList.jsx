import { useContext } from "react";
import { Context } from "../context/ContextProvider";

export default function TextList() {
  const { texts } = useContext(Context);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
