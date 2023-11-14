import Hero from "../components/Hero";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Pantries() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Local Pantries"
      />
      <Map />
      <Footer />
    </>
  );
}

export default Pantries;
