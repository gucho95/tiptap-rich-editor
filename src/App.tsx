import { Fragment } from "react";
import RichEditor from "./components/RichEditor";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <div className="h-screen">
        <Header />
        <main>
          <div className="w-[800px] max-w-full mx-auto rounded-xl h-full overflow-hidden mt-10">
            <RichEditor />
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
