import Category from "../models/category.model.js";
import Products from "../models/product.model.js";

export const createCategory = async (req, res) => {
  try {
    const { category } = req.body;

    //validation
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Please provide catgory name",
      });
    }
    //chech if category exists
    const existingCategory = await Category.findOne({ category });
    if (existingCategory) {
      return res.status(409).send({
        success: false,
        message: "Category already exists",
      });
    }
    await Category.create({ category });

    res.status(201).send({
      success: true,
      message: `${category} category created successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create category",
    });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).send({
      success: true,
      message: "Categories fetched successfully",
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all API",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    // find category
    const category = await Category.findById(req.params.id);
    //validation
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    // find product with this category id
    const products = await Products.find({ category: category._id });
    // update producty category
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = undefined;
      await product.save();
    }
    // save
    await category.deleteOne();
    res.status(200).send({
      success: true,
      message: "Catgeory Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In DELETE  Category API",
      error,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    // find category
    const category = await Category.findById(req.params.id);
    //validation
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    // get new cat
    const { updatedCategory } = req.body;
    // find product with this category id
    const products = await Products.find({ category: category._id });
    // update producty category
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = updatedCategory;
      await product.save();
    }
    if (updatedCategory) category.category = updatedCategory;

    // save
    await category.save();
    res.status(200).send({
      success: true,
      message: "Catgeory Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    // cast error ||  OBJECT ID
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In UPDATE CATEGPORY API",
      error,
    });
  }
};
