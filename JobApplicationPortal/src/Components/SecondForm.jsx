import React from "react";
import FormUI from "../UI/FormUI";

const SecondForm = ({onSetUser}) => {
  return (
    <FormUI>
      <form>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="experience"
          >
            Experience
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="experience"
            type="text"
            placeholder="Experience"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, experience: e.target.value};
              });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="lastCtc"
          >
            Last CTC
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="lastCtc"
            type="text"
            placeholder="In INR"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, lastCtc: e.target.value};
              });
            }}
          />
        </div>
        <div>
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="expectedCtc"
            placeholder="Age"
          >
            Expected CTC
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="expectedCtc"
            placeholder="In INR"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, expectedCtc: e.target.value};
              });
            }}
          />
        </div>
      </form>
    </FormUI>
  );
};

export default SecondForm;
