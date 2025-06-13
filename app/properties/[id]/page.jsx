// Server Component:
// Below is how we use the same client side hooks but on the server side.
import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  await connectDB();
  const property = await Property.findById(resolvedParams.id).lean();
  // const resolvedSearchParams = await searchParams;
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
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
