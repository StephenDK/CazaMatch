import connectDB from "@/config/database";
import Property from "@/models/Property";

// This route in the [id] subfolder of the properties folder is accessible by the following route:
// "/api/properties/:id"

export const GET = async (request, response) => {
  try {
    await connectDB();

    // Below is how we get the :id from the URL
    let paramValue = await response.params;
    console.log("[PARAMS]: ", paramValue.id);

    // Below is how we get the Query params from the URL
    console.log("[QUERY PARAMS]: ", request.nextUrl.searchParams);
    // const properties = await Property.find({});

    const property = await Property.findById(paramValue.id);

    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    return new Response(property, {
      status: 200,
    });
  } catch (err) {
    return new Response("Something went wrong", { status: 500 });
  }
};
