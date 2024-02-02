import React from "react";

const FormUI = (props) => {
  return (
    <div className="h-fit w-2/5 bg-gray-800 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border-[0.5px] border-gray-100 p-12 ">
      {props.children}
    </div>
  );
};

export default FormUI;
