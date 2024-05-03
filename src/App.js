import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
    </>
  );
}

export default App;
