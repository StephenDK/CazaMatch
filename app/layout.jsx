import "@/assets/styles/globals.css";

// Importing the Navbar component:
import Navbar from "@/components/Navbar";

// The metadata object sets the HTML head field.
// If we dont add it to individual pages, this will be the meta data for all pages!!
// You can view the meta data the HTML head tag in Google developer tools.
export const metadata = {
  title: "CazaMatch",
  keywords: "rental, property, real estate",
  description: "Find the perfect realtor",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

// NOTES:
// 1. This component is going to serve as our entry point into our application
