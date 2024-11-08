// import ContactForm from "./components/ContactForm/ContactForm";

// import ColorPicker from "./components/ColorPicker/ColorPicker";
import { useState } from "react";
// import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";
// import { ToDoList } from "./components/ToDoList/ToDoList";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fuga
          quidem optio consectetur mollitia, illo qui nihil quasi, eos laborum
          corrupti ratione blanditiis pariatur quaerat reiciendis impedit
          commodi possimus hic!
        </Modal>
      )}
      {/* <ColorPicker /> */}
      {/* <ToDoList /> */}
      {/* <ContactForm /> */}
      {/* <SearchBox />
  <ContactList /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
