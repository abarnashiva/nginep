import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // Assuming you have a Footer component
import { router } from "./AppRouter";

function App() {
  return (
    <div className="font-sans">
      <Header />

      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;