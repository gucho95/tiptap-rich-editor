import { Fragment } from "react";
import RichEditor from "./components/RichEditor";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="w-[800px] max-w-full mt-10 mx-auto rounded-xl">
        <RichEditor />
      </main>
    </Fragment>
  );
}

export default App;
