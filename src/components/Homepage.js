import { About } from "./About";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Highlights } from "./Highlights";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}
