import React from "react";
import FormUI from "../UI/FormUI";

const FirstForm = ({onSetUser}) => {
  return (
    <FormUI>
      <form>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="name"
            type="text"
            placeholder="Name"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, name: e.target.value};
              });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="appliedFor"
          >
            Applying For
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="appliedFor"
            type="text"
            placeholder="Role"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, appliedFor: e.target.value};
              });
            }}
          />
        </div>
        <div>
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="age"
            placeholder="Age"
          >
            Age
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="age"
            placeholder="Age"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, age: e.target.value};
              });
            }}
          />
        </div>
      </form>
    </FormUI>
  );
};

export default FirstForm;
