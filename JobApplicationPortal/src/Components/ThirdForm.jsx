import React from "react";
import FormUI from "../UI/FormUI";

const ThirdForm = ({onSetUser}) => {
  return (
    <FormUI>
      <form>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Current Location
          </label>
          <input
            className="w-full border leading-none text-gray-50 p-3 focus:outline-none bg-primary rounded-md focus:border-secondary"
            id="location"
            type="text"
            placeholder="Location"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, location: e.target.value};
              });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-sm font-bold mb-2"
            htmlFor="resume"
          >
            Drop Resume here
          </label>
          <input
            className="mt-2 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-md border border-solid border-secondary bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-slate-50 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            id="formFileLg"
            type="file"
            onBlur={(e) => {
              onSetUser((prev) => {
                return {...prev, resume: e.target.value};
              });
            }}
          />
        </div>
      </form>
    </FormUI>
  );
};

export default ThirdForm;
