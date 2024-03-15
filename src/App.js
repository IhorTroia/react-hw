import './App.css';
import HeaderNav from "./components/HeaderNav";
import AsideNav from "./components/AsideNav";
import Content from "./components/Content";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <HeaderNav/>
        <Container>
            <Row className='mt-5'>
                <Col xs lg="2" className='nav-background'><AsideNav/></Col>
                <Col xs lg="8"><Content/></Col>
            </Row>

        </Container>
    </div>
  );
}

export default App;
