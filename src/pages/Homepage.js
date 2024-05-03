import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Highlights } from "../components/Highlights";
import { Testimonials } from "../components/Testimonials";
import { Layout } from "../layouts/Layout";

export function Homepage() {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </Layout>
  );
}
