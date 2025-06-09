import connectDB from "@/config/database";
import Property from "@/models/Property";

// This route in the GET route for the properties folder:
// "/api/properties"
export const GET = async () => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(
      JSON.stringify({ message: "Hello Worlds", data: properties }),
      {
        status: 200,
      }
    );
  } catch (err) {
    return new Response("Something went wrong", { status: 500 });
  }
};
