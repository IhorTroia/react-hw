import './App.css';
import MyProgress from "./components/MyProgress";
import MyAlert from "./components/MyAlert";
import MyListGroup from "./components/MyListGroup";
import MyBtnGroup from "./components/MyBtnGroup";
import MyCarousel from "./components/MyCarousel";
import MyCollapse from "./components/MyCollapse";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <MyProgress percentage={60} />
      <hr/>
      <MyAlert type="warning" text="keekw" />
      <hr/>
      <MyListGroup>
        <p>one</p>
        <p>two</p>
        <p>three</p>
      </MyListGroup>
      <hr/>
      <MyBtnGroup />
      <hr/>
      <MyCarousel />
      <hr/>
      <MyCollapse text='Some text...' />
      <hr/>
      <MyForm />
      <hr/>
    </div>
  );
}

export default App;
