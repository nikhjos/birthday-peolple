import { useState } from "react";
import data from "./data";
import People from "./People";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <People people={people} setPeople={setPeople} />
    </main>
  );
};

export default App;
