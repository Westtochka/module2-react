// import ContactForm from "./components/ContactForm/ContactForm";

import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import { ToDoList } from "./components/ToDoList/ToDoList";

const App = () => {
  return (
    <div>
      <h1></h1>
      <Counter />
      <ColorPicker />
      <ToDoList />
      {/* <ContactForm /> */}
      {/* <SearchBox />
  <ContactList /> */}
    </div>
  );
};

export default App;
