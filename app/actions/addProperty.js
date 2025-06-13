"use server";

async function addProperty(formData) {
  console.log("[ADD PROPERTY ACTION]");
  // Getting data from the form.
  // Server actions are added to the action filed in a html form element
  //   console.log("[FORM DATA]: ", formData.get("name"));

  // Get amenities
  console.log("[FORM DATA AMENITIES]: ", formData.getAll("amenities"));
  const amenities = formData.getAll("amenities");
  // Get images
  const images = formData
    .getAll("images")
    .filter((image) => image.name !== "")
    .map((image) => image.name);
  console.log("[FORMATTED FORM DATA IMAGES]: ", images);

  const propertyData = {
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_feet: formData.get("square_feet"),
    beds: formData.get("beds"),
    amenities,
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
    images,
  };

  console.log("[PROPERTY DATA]: ", propertyData);
}

export default addProperty;
