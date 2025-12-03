import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card
        content="This is axia africa"
        course="mobile development"
        id={1}
        isActive={true}
        name="Akinniyi Ezekiel Wonderful"
      />
      <Card
        content="This is axia africa 2"
        course="mobile development"
        id={2}
        isActive={true}
        name="Akinniyi Ezekiel"
      />
      <Card
        content="This is axia africa 3"
        course="mobile development"
        id={3}
        isActive={true}
        name="Akinniyi Wonderful"
      />
    </div>
  );
}

export default App;
