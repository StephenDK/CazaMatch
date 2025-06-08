// Server Component:
// Below is how we use the same client side hooks but on the server side.
const PropertyPage = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  return (
    <div>
      <h2>Property Page Params: {resolvedParams.id}</h2>
      <h2>Property page Search Params: {resolvedSearchParams.name}</h2>
    </div>
  );
};

export default PropertyPage;

// This is an example of a dynamic route. For example,
// This page will load when a user visits "properties/:id"
// Take not of the folder created for this route "[id]"
// You can change id to whatever we want.
// *IMPORTANT* If we wanted to maje this route a catch all, for example, "properties/:id/rooms"
// We would add three dots to the folder name "[...id]"

// console.log in Server Components
// Since this is a Server Component, everything we console.log, will show up in the terminal while visiting '/properties/:id
// To turn this into a Client Component, add 'use client' to the top of the page

// useRouter Navigation Hook (Client Component Only):
// We can use NextJS's router hooks to navigate to different pages.

// useParams Navigation Hook (Client Component Only):
// This hook will allow us to get the params from the URL
// Using this hook will allow us to get the :id from the URL, '/properties/:id'

// useSearchParams Navigation Hook (Client Component Only):
// This hook will allow us to get the query parameters from a URL
// To get the query params, use the .get('key') method on useSearchParams
// For example, '/properties/:id?name=brad

// The following code is how we can use Next navigation hooks in a 'client component'
/*
"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  console.log("Property Component");
  const router = useRouter();
  console.log("[USE ROUTER HOOK]:", router);
  const params = useParams();
  console.log("[USE PARAMS HOOK]:", params);
  const searchParams = useSearchParams();
  console.log("[USE SEARCH PARAMS HOOK]:", searchParams.get("name"));
  const pathname = usePathname();
  console.log("[USE PATH NAME HOOK]:", pathname);
  return (
    <div>
      <h1>Property Page</h1>
      <button onClick={() => router.replace("/")}>Go Home</button>
    </div>
  );
};

export default PropertyPage;
*/

// Server Component Hooks:
// To gett the server components, we need to use async and await.
// Without it, the params and searchParams wont be resolved.
