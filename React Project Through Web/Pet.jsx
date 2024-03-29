// const Pet = (props) => {
//     return (
//       <div>
//         <h1>{props.name}</h1>
//         <h2>{props.animal}</h2>
//         <h2>{props.breed}</h2>
//       </div>
//     );
//   };
  
//   export default Pet;
import { createRoot } from "react-dom/client";
const Pet = () => {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mix" />
      </div>
    );
  };

//   const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

export default Pet;