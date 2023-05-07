import NavBar from "./components/NavBar";
import Hero from "./pages/home/Hero";
import AboutUs from "./pages/home/AboutUs";
import Services from "./pages/home/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
