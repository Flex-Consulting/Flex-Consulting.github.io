import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import OurNavbar from "./components/OurNavbar";

function App() {
  return (
    <div className="App">
      <OurNavbar/>
      <Container>
      <section className='landing'>
        <div className='center'>
          <p className='sub-title'>Welcome to Flex Consulting</p>
          <h1 className='title-font'>Flexible solutions, exceptional quality</h1>
        </div>
      </section>
      </Container>
    </div>
  );
}

export default App;
