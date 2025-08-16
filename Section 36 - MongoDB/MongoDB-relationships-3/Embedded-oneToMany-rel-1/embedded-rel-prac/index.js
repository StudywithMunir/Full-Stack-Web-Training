import mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/shopDB");

// ============================
// 📦 Child Schema (Embedded Document)
// ============================

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "Reviewer name is required"],
    trim: true,
    minlength: [2, "Reviewer name must be at least 2 characters long"],
    maxlength: [50, "Reviewer name must be less than 50 characters"],
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
    trim: true,
    minlength: [5, "Comment must be at least 5 characters long"],
    maxlength: [200, "Comment must be less than 200 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ============================
// 📦 Parent Schema (Main Document)
// ============================
// - Embeds reviews directly in product document
// - Good for small, related data that's always queried together

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    unique: true,
    minlength: [2, "Product name must be at least 2 characters long"],
    maxlength: [100, "Product name must be less than 100 characters"],
  },
  reviews: {
    type: [reviewSchema], //passing array of embedded reviews
    validate: {
      validator: arr => arr.length <= 10,
      message: "A product can have a maximum of 10 reviews",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

// ============================
// 📌 Create Product with Embedded Reviews
// ============================
async function createProduct() {
  await Product.create({
    name: "Laptop",
    reviews: [
      { user: "Maximus", comment: "Great!" },
      { user: "Sara", comment: "Good performance and battery" },
    ],
  });
  console.log("✅ Product created with embedded reviews");
}

// ============================
// 📌 Read Product & Access Reviews
// ============================
async function readProduct() {
  const prod = await Product.findOne({ name: "Laptop" });
  if (prod) {
    console.log(`\n📦 Product: ${prod.name}`);
    prod.reviews.forEach((review, index) => {
      console.log(`Review #${index + 1} by ${review.user}: ${review.comment}`);
    });
  } else {
    console.log("❌ Product not found");
  }
}

// ============================
// 📌 Run functions in sequence
// ============================
try {
  await createProduct();
  await readProduct();
} catch (error) {
  console.error("Error occurred:", error.message);
} finally {
  await mongoose.connection.close();
}
