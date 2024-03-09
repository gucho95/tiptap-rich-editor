import { Fragment } from "react/jsx-runtime";
import RichEditor from "./components/RichEditor";

function App() {
  return (
    <Fragment>
      <div className="w-full sticky top-0 bg-purple-200 h-16 flex justify-between py-2 px-4 z-10 gap-x-2">
        <div className="w-20 rounded-xl bg-purple-300"></div>
        <div className="w-80 rounded-xl bg-purple-300"></div>
        <div className="flex space-x-2">
          <div className="w-40 rounded-xl bg-purple-300"></div>
          <div className="w-40 rounded-xl bg-purple-300"></div>
        </div>
      </div>
      <div className="w-[800px] max-w-full mt-10 mx-auto rounded-xl">
        <RichEditor />
      </div>
    </Fragment>
  );
}

export default App;
