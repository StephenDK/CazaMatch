import connectDB from "@/config/database";
import Property from "@/models/Property";

import PropertyCard from "@/components/PropertyCard";

const PropertiesPage = async ({ searchParams }) => {
  const params = await searchParams;
  const { page = 1, pageSize = 2 } = params;
  console.log("[PARAMS]: ", { page, pageSize });

  // Connect DB
  await connectDB();

  const skip = (page - 1) * pageSize;

  const total = await Property.countDocuments({});

  const Properties = await Property.find({}).skip(skip).limit(pageSize);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {Properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
