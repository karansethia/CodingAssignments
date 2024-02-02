import React, {useState} from "react";
import FirstForm from "../Components/FirstForm";
import SecondForm from "../Components/SecondForm";
import ThirdForm from "../Components/ThirdForm";
import {useDispatch} from "react-redux";
import {userAction} from "../store";
import Confirmation from "../Components/Confirmation";

const HomePage = ({onIsSubmitted}) => {
  const dispatch = useDispatch();
  const [formProgress, setFormProgress] = useState(1);
  const [user, setUser] = useState({
    name: null,
    age: null,
    appliedFor: null,
    experience: null,
    lastCtc: null,
    expectedCtc: null,
    location: "",
    resume: null,
  });
  const renderForm = () => {
    switch (formProgress) {
      case 1:
        return <FirstForm onSetUser={setUser} />;
      case 2:
        return <SecondForm onSetUser={setUser} />;
      case 3:
        return <ThirdForm onSetUser={setUser} />;
      case 4:
        return <Confirmation onIsSubmitted={onIsSubmitted} />;
      default:
        return null;
    }
  };

  const prevHandler = () => {
    if (formProgress != 1) {
      setFormProgress((prev) => prev - 1);
    }
  };
  const nextHandler = () => {
    if (formProgress != 4) {
      setFormProgress((prev) => prev + 1);
    }
    if (formProgress == 1) {
      // userAction.submitFirst();
      console.log(user);
      dispatch(
        userAction.submitFirst({
          name: user.name,
          age: user.age,
          appliedFor: user.appliedFor,
        })
      );
    }
    if (formProgress == 2) {
      // userAction.submitFirst();
      console.log(user);
      dispatch(
        userAction.submitSecond({
          experience: user.experience,
          expectedCtc: user.expectedCtc,
          lastCtc: user.lastCtc,
        })
      );
    }
    if (formProgress == 3) {
      // userAction.submitFirst();
      console.log(user);
      dispatch(
        userAction.submitThird({
          location: user.location,
          resume: user.resume,
        })
      );
    }
  };

  return (
    <>
      <button
        onClick={prevHandler}
        className="bg-secondary text-white px-3 py-5 rounded-md"
      >
        {" "}
        {"<"}{" "}
      </button>

      {renderForm()}

      <button
        onClick={nextHandler}
        className="bg-secondary text-white px-3 py-5 rounded-md"
      >
        {" "}
        {">"}{" "}
      </button>
    </>
  );
};

export default HomePage;
