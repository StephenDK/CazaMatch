// Import the Hero component
import Hero from "@/components/Hero";

// Import the InfoBoxes Component
import InfoBoxes from "@/components/InfoBoxes";

// Import Home Properties Component
import HomeProperties from "@/components/HomeProperties";

const HomePage = ({ children }) => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;

// # page.jsx: By default, this component is being rendered on the server.
// Since it is located in the Root app folder

// # Link tag:
// We can use Link in three ways. First way:
// 1. <Link href="/properties">Go to Properties</Link>
// 2. <Link href="/properties?name=test">Go to Properties</Link>
// We can also pass a object to a link tag, for example:
// 3. <Link href={{ pathname: 'properties', query: { name: 'test'} }}>Go To Properties</Link>
// 2 and 3 will result in the URL being '/properties?name=test
