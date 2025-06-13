import "@/assets/styles/globals.css";

// Importing the Navbar component:
import Navbar from "@/components/Navbar";
// Importing the Footer component
import Footer from "@/components/Footer";

// Authprovider import
import AuthProvider from "@/components/AuthProvider";
// The metadata object sets the HTML head field.
// If we dont add it to individual pages, this will be the meta data for all pages!!
// You can view the meta data the HTML head tag in Google developer tools.

// Toastify Container and CSS Styles
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "RealtorMatch",
  keywords: "rental, property, real estate",
  description: "Find the perfect realtor",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;

// NOTES:
// 1. This component is going to serve as our entry point into our application
