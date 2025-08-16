import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/shopDB");

// Review Schema
const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true, trim: true },
  comment: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});
const Review = mongoose.model("Review", reviewSchema);

// Product Schema (referencing reviews)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, unique: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  createdAt: { type: Date, default: Date.now }
});
const Product = mongoose.model("Product", productSchema);

// Create Product with Referenced Reviews
async function createProduct() {
  const review1 = await Review.create({ user: "Max", comment: "Great!" });
  const review2 = await Review.create({ user: "Zack", comment: "Good performance and battery" });

  await Product.create({
    name: "Laptop",
    reviews: [review1._id, review2._id] // store IDs
  });

  console.log("✅ Product created with referenced reviews");
}

// Read Product with Populated Reviews
async function readProductWithReviews() {
  const prod = await Product.findOne({ name: "Laptop" }).populate("reviews"); //using populate to add reviews prop
  if (prod) {
    console.log(`\n📦 Product: ${prod.name}`);
    prod.reviews.forEach((review, index) => {
      console.log(`Review #${index + 1} by ${review.user}: ${review.comment}`);
    });
  }
}

await createProduct();
await readProductWithReviews();
await mongoose.connection.close();