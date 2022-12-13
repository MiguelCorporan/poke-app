import { useState, useEffect, useLayoutEffect } from "react";
import Todo from "./Components/Todo";
import AllButon from "./Components/AllButon";

function App() {
  const [Data, setData] = useState([]);

  useLayoutEffect(() => {
    const Llamando = async () => {
      try {
        const URL = `https://pokeapi.co/api/v2/type/`;
        const ApiLlamado = await fetch(URL);
        const Convierte = await ApiLlamado.json();

        const { results } = Convierte;

        results.map(async (El) => {
          const { url } = El;
          try {
            const NewURL = await fetch(url);
            const NewResul = await NewURL.json();
            const { id, name } = NewResul;
            setData((D) => [...D, { id, name }]);
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    Llamando();
  }, []);

  return (
    <div className="App">
      <Todo Data={Data} />
      {/* <AllButon Data = {Data}  /> */}
    </div>
  );
}

export default App;
