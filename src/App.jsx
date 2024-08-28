import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Hassan Murtaza",
    age: 25,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card
        userName="Wonder Woman"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        userImage="https://images.pexels.com/photos/3761307/pexels-photo-3761307.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <Card
        userName="Churail"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        userImage="https://images.pexels.com/photos/17978607/pexels-photo-17978607/free-photo-of-costumers-during-traditional-peruvian-celebrations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </>
  );
}

export default App;
