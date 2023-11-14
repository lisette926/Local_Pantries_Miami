import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Volunteers from "../components/Volunteers";
import Footer from "../components/footer";

function GetInvolved() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Help End Food Insecurity in Miami"
      />
      <h2>
        Your support and involvement can make a real difference in the fight
        against food insecurity in Miami. Explore the various ways you can get
        involved below.
      </h2>
      <Volunteers />
      <Footer />
    </>
  );
}

export default GetInvolved;
