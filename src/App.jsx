// import ContactForm from "./components/ContactForm/ContactForm";

import Form from "./components/Form/Form";
// import UncontrolledForm from "./components/Form/UncontrolledForm";

// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import { useState, useEffect } from "react";
// import Counter from "./components/Counter/Counter";
// import Modal from "./components/Modal/Modal";
// import Description from "./components/Description/Description";
// import Feedback from "./components/Feedback/Feedback";
// import Options from "./components/Options/Options";
// import { ToDoList } from "./components/ToDoList/ToDoList";
// import Vote from "./components/Vote/Vote";
// import feedback from './assets/feedback.json'
const App = () => {
  // const [feedbackData, setFeedbackData] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem("feedbackData")) ?? {
  //       good: 0,
  //       neutral: 0,
  //       bad: 0,
  //     }
  // );

  // const totalFeedback =
  //   feedbackData.good + feedbackData.neutral + feedbackData.bad;
  // const handleClickByOption = (value) => {
  //   setFeedbackData((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  // };
  // const positiveFeedback = Math.round(
  //   (feedbackData.good / totalFeedback) * 100
  // );
  // const handleReset = () => {
  //   setFeedbackData({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };
  // useEffect(() => {
  //   window.localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  // }, [feedbackData]);

  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
        backgroundColor: "#eeeee9",
        padding: "50px 50px",
      }}
    >
      {/* <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga
          quidem optio consectetur mollitia, illo qui nihil quasi, eos laborum
          corrupti ratione blanditiis pariatur quaerat reiciendis impedit
          commodi possimus hic!
        </Modal>
      )} */}
      {/* <ColorPicker /> */}
      {/* <ToDoList /> */}
      {/* <ContactForm /> */}
      {/* <SearchBox />
  <ContactList /> */}
      {/* <Counter /> */}
      {/* <Description
        title={"Sip Happens Café"}
        text={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      /> */}
      {/* <Options
        data={feedbackData}
        handleClickByOption={handleClickByOption}
        handleReset={handleReset}
      />

      {feedbackData.good > 0 ||
      feedbackData.neutral > 0 ||
      feedbackData.bad > 0 ? (
        <Feedback
          data={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p>There are not feedback</p>
      )} */}

      {/* <Feedback data={feedbackData} /> */}

      {/* <Vote /> */}
      {/* <UncontrolledForm /> */}
      <Form />
    </div>
  );
};

export default App;
