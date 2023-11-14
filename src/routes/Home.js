import Body from "../components/Body";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Miami's Pantry Network"
      />
      <Body />
      <h2>Together we can make a difference!</h2>
      <Footer />
    </>
  );
}

export default Home;
