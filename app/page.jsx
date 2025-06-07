// Importing Link to navigate to ather pages
import Link from "next/link";

const HomePage = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Go to Properties</Link>
    </div>
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
