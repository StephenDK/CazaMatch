import "@/assets/styles/globals.css";

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

// NOTES:
// 1. This component is going to serve as our entry point into our application
