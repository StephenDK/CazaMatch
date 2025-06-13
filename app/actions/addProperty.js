"use server";

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addProperty(formData) {
  console.log("[ADD PROPERTY ACTION]");

  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  // Get amenities
  console.log("[FORM DATA AMENITIES]: ", formData.getAll("amenities"));
  const amenities = formData.getAll("amenities");

  // Get images and filter out empty files
  console.log("[FORMATTED FORM DATA IMAGES]: ", formData.getAll("images"));
  const images = formData.getAll("images").filter((image) => image.name !== "");

  const propertyData = {
    owner: userId,
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
  };

  const imageUrls = [];

  for (const imageFile of images) {
    // Validate file type
    const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
    console.log(
      `[PROCESSING IMAGE]: ${imageFile.name}, Type: ${imageFile.type}`
    );
    if (!validImageTypes.includes(imageFile.type)) {
      throw new Error(
        `Invalid file type for ${
          imageFile.name
        }. Supported types: ${validImageTypes.join(", ")}`
      );
    }

    // Convert image file to buffer
    const imageBuffer = await imageFile.arrayBuffer();
    console.log(
      `[IMAGE BUFFER SIZE]: ${imageFile.name}, Size: ${imageBuffer.byteLength} bytes`
    );
    const imageData = Buffer.from(imageBuffer);

    // Convert to base64
    const imageBase64 = imageData.toString("base64");
    console.log(
      `[BASE64 LENGTH]: ${imageFile.name}, Length: ${imageBase64.length}`
    );

    // Upload to Cloudinary with dynamic MIME type
    try {
      const result = await cloudinary.uploader.upload(
        `data:${imageFile.type};base64,${imageBase64}`,
        {
          folder: "RealtorMatch",
        }
      );
      console.log(
        `[CLOUDINARY UPLOAD SUCCESS]: ${imageFile.name}, URL: ${result.secure_url}`
      );
      imageUrls.push(result.secure_url);
    } catch (error) {
      console.error(
        `[CLOUDINARY UPLOAD ERROR]: ${imageFile.name}, Error: ${error.message}`
      );
      throw new Error(`Failed to upload ${imageFile.name}: ${error.message}`);
    }
  }

  propertyData.images = imageUrls;

  console.log("[PROPERTY DATA]: ", propertyData);

  const newProperty = new Property(propertyData);

  await newProperty.save();

  revalidatePath("/", "layout");

  redirect(`/properties/${newProperty._id}`);
}

export default addProperty;
