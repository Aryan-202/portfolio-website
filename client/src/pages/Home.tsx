import { Layout } from "@/components/layouts/Layout";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;