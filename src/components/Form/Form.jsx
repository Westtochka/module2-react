import { useState } from "react";

const Form = () => {
  const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
    age: "",
    country: "",
    about: "",
    gender: "male",
    agree: false,
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };
  //   const handleChangeUsernameField = (e) => {
  //     setFormData((prev) => ({ ...prev, username: e.target.value }));
  //   };
  //   const handleChangeEmailField = (e) => {
  //     setFormData((prev) => ({ ...prev, email: e.target.value }));
  //   };
  //   const handleChangePasswordField = (e) => {
  //     setFormData((prev) => ({ ...prev, password: e.target.value }));
  //   };
  const handleChangeInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      return setFormData({ ...formData, [name]: !formData[name] });
    }
    // if (value === "op") {
    //   setFormData({ ...formData, [name]: "NOOOO!" });
    //   return;
    // }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            value={formData.username}
            onChange={handleChangeInput}
            type="text"
            placeholder="name"
            name="username"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            value={formData.email}
            onChange={handleChangeInput}
            type="text"
            placeholder="email"
            name="email"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            value={formData.password}
            onChange={handleChangeInput}
            type="text"
            placeholder="password"
            name="password"
          />
        </label>
        <label>
          <span>Age:</span>
          <input
            value={formData.age}
            onChange={handleChangeInput}
            type="number"
            placeholder="age"
            name="age"
          />
        </label>
        <label>
          <span>About me:</span>
          <textarea
            value={formData.about}
            onChange={handleChangeInput}
            placeholder="text"
            name="about"
          />
        </label>
        <label>
          <span>Country:</span>
          <select
            value={formData.country}
            onChange={handleChangeInput}
            name="country"
          >
            <option value={"Ukraine"}>Ukraine</option>
            <option value={"USA"}>USA</option>
            <option value={"Canada"}>Canada</option>
          </select>
        </label>
        <div>
          <label>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={handleChangeInput}
              checked={formData.gender === "male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={handleChangeInput}
              checked={formData.gender === "female"}
            />
            Female
          </label>
        </div>
        <label>
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={handleChangeInput}
            name="agree"
          />
          I agree with rules! Continue!
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
