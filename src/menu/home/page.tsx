import BlogAndTestimonials from "../../components/BlogAndTestimonials";
import Calendar from "../../components/Calendar";
import Feature from "../../components/Feature";
import Hero from "../../components/Hero";
import TopDestination from "../../components/TopDestination";


function HomePage() {
  return (
    <div className="font-sans">

      <div className="container">
        <Hero />
        <Calendar />
        <Feature />
        <TopDestination />
        <BlogAndTestimonials />
      </div>
    </div>
  );
}

export default HomePage;