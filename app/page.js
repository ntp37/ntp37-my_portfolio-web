import Aboutme from "@/components/aboutme/Aboutme";
import Header from "@/components/Header";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-100 snap-y">
      <header className="header">
        <Header />
      </header>
      <section className="about-me bg-slate-600">
        <Aboutme />
      </section>
      <section className="project bg-blue-950">
        <Project />
      </section>
      <section className="contact bg-stone-900">
        <Contact />
      </section>
      <footer className="footer bg-stone-900 p-3 md:p-6">
        <Footer />
      </footer>
    </main>
  );
}
