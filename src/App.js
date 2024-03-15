import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card title="First Title" />

      <Card text="Second Body" />

      <Card title="Third Title" text="Third Body" />
    </div>
  );
}

export default App;
