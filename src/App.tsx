import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // Assuming you have a Footer component
import { router } from "./AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
     useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="font-sans">
      <Header />

      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;