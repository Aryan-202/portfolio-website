import { Layout } from "@/components/layouts/Layout";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Projects from "@/components/sections/Projects/Projects";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
};

export default Home;