import React from "react";
import FormUI from "../UI/FormUI";

const Confirmation = ({onIsSubmitted}) => {
  const setSubmit = () => {
    console.log("HI");
    onIsSubmitted(true);
  };
  return (
    <FormUI>
      <p className="text-slate-100 text-sm py-2">
        I hereby declare all the given information is true
      </p>
      <button
        onClick={setSubmit}
        className="w-full bg-secondary px-4 py-2 rounded-md text-white font-bold"
      >
        Confirm Details
      </button>
    </FormUI>
  );
};

export default Confirmation;
