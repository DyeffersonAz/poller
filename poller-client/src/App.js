import "./App.css";
import Poll from "./components/poll";

function App() {
  const currentOptions = [
    {
      title: "Flocos",
      votes: 98,
      color: "lightgray",
    },
    {
      title: "Morango",
      votes: 15,
      color: "red",
    },
    {
      title: "Chocolate",
      votes: 15,
      color: "brown",
    },
    {
      title: "Napolitano",
      votes: 2,
      color: "darkblue",
    },
  ]

  return (
    <div className="App">
      <Poll
        title="Qual o melhor sabor de sorvete?"
        options={currentOptions}
      />
    </div>
  );
}

export default App;
