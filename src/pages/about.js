import Menu from "@/components/Menu";
import Author from "@/components/Author";
import Footer from "@/components/Footer";

function About() {
  return (
    <main>
      <Menu />
      <h2>Sobre</h2>
      <Author
        // Parâmetro
        name={"Marcelo Joia"}
        // Envia Ojeto 
        courses={
          { course: "React", price: 967, workload: "20 horas" }
        }
      />
      <Footer />
    </main>
  );
}

export default About;