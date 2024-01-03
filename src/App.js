import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const inlineCenterText = {
    textAlign: "center",
  };
  return (
    <div className="App">
      <Navbar />
      <h1 style={inlineCenterText} className="mt-4">
        Body
      </h1>
      <Body />
      <h1 style={inlineCenterText} className="m-4">
        Contact Me
      </h1>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
