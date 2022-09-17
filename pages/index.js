import Hero from "../components/Hero";
import Layout from "../components/Layout";
import HomepageContent from "../components/HomepageContent";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
