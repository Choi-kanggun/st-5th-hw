import { useSelector } from "react-redux";

export default function TextList() {
  const todos = useSelector((store) => store.todos.todos);
  return (
    <ul>
      {todos.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
