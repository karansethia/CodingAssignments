import React, {useState} from "react";
import HomePage from "./Pages/HomePage";
import ResultsPage from "./Pages/ResultsPage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="w-screen h-screen bg-slate-900 app flex justify-center items-center">
      {!isSubmitted && <HomePage onIsSubmitted={setIsSubmitted} />}
      {isSubmitted && <ResultsPage />}
    </div>
  );
}

export default App;
