import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div data-theme="bumblebee" className="min-h-full bg-secondary">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
