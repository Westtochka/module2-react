import { useState } from "react";
import colors from "../../assets/colors.json";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  return (
    <div>
      <section style={{ backgroundColor: currentColor }}>
        <div>
          <h2>Current color:{currentColor}</h2>
          <ul>
            {colors.map((item) => (
              <li onClick={() => setCurrentColor(item.color)} key={item.id}>
                {item.color}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ColorPicker;
