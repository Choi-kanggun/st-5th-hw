import React from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import ContextProvider from "./context/ContextProvider";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  return (
    <div>
      <ContextProvider>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </ContextProvider>
    </div>
  );
}

export default App;
