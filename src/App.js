import './App.css';
import MyCarousel from "./components/MyCarousel";
import Container from 'react-bootstrap/Container';
import carouselImage from "./bellamy2004.jpg";

function App() {
  return (
    <div className="App">
        <Container>
            <MyCarousel image={carouselImage}/>
        </Container>
    </div>
  );
}

export default App;
