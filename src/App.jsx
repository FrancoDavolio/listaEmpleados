import "./App.css";
import EmpleadoList from "./components/EmpleadoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <EmpleadoList></EmpleadoList>
    </Container>
  );
}

export default App;
