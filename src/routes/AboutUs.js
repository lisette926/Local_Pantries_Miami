import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="About Us"
      />

      <h2>
        {" "}
        This project is dedicated to addressing the critical problem of food
        insecurity in Miami Dade County. This challenge affects thousands of
        individuals and families in our community.
      </h2>
      <About />
      <h1>Together, we can make a difference</h1>
      <Footer />
    </>
  );
}

export default AboutUs;
