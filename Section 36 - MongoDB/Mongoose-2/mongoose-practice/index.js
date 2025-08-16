import mongoose from "mongoose";

// we do await bcz it is making request externally
await mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name, otherwise the data will not be inserted"],
    },
    rating: {
        type: Number,
        min: [1, "Rating should be between 1-10"],
        max: [10, "Rating should be between 1-10"],
    },
    review: {
        type: String,
        maxlength: [50, "Review should be less than or equal to 50 characters"],
    },
});

// Creating Fruit Model which use/create Fruit Collection and follows fruitSchema
const Fruit = mongoose.model("Fruit", fruitSchema);

// CREATE
async function createData() {
    await Fruit.insertMany([
        { name: "Apple", rating: 7, review: "Tastes sweet" },
        { name: "Banana", rating: 9, review: "Soft and creamy" },
        { name: "Orange", rating: 8, review: "Tangy and juicy" }
    ]);
    console.log("Fruits saved successfully!");
}

// READ
async function readData() {
    const fruits = await Fruit.find();
    console.log("\n--- All Fruits ---");
    fruits.forEach(fruit => console.log(fruit.name));
    console.log("------------------\n");
}

// UPDATE
async function updateData() {
    const result = await Fruit.updateOne(
        { _id: new mongoose.Types.ObjectId("689c61d7ff6c8c706bef5d23") },
        { $set: { name: "Grapes" } }
    );

    if (result.matchedCount === 0) {
        console.log("No document found with that _id.");
    } else if (result.modifiedCount > 0) {
        console.log("Document updated successfully!");
    } else {
        console.log("Document found but no changes were made.");
    }
}

// DELETE
async function deleteData() {
    const result = await Fruit.deleteOne(
        { _id: new mongoose.Types.ObjectId("689c61d7ff6c8c706bef5d23") }
    );

    if (result.deletedCount === 0) {
        console.log("No document found with that _id.");
    } else {
        console.log("Document deleted successfully!");
    }
}

// Choose which operation to run
try {
    // await createData();
    await readData();
    // await updateData();
    // await deleteData();
} catch (err) {
    console.error("Error:", err.message);
} finally {
    mongoose.connection.close();
}