import { Products } from "./../models/product.model.js";
import { getDataUri } from "./../utils/features.utils.js";
import cloudinary from "cloudinary";

export const getAllproductController = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).send({
      success: true,
      message: "All products fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all products API",
      error,
    });
  }
};

export const singleProductController = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Product found",
      product,
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: `Invalid Id`,
      });
    }
    res.status(500).send({
      success: false,
      message: `Error in get single product Api`,
    });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    //validation
    // if (!name || description || price || category || stock) {
    //   res.status(401).send({
    //     success: false,
    //     message: "Please provide all fields",
    //   });
    // }
    if (!req.file) {
      return res.status(500).send({
        success: false,
        message: "please provide product images",
      });
    }
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };

    await Products.create({
      name,
      description,
      price,
      category,
      stock,
      images: [image],
    });

    res.status(201).send({
      success: true,
      message: "product Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create product Api",
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    const { name, description, price, stock, category } = req.body;

    //validate and update
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.stock = stock;
    if (category) product.category = category;
    await product.save();
    res.status(200).send({
      success: true,
      message: "product details updated",
    });
  } catch (error) {
    console.log(error);
    //cast error
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error in update product controller",
    });
  }
};

export const updateImageController = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    if (!req.file) {
      return res.status(401).send({
        success: false,
        message: "Image not found",
      });
    }

    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);

    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };

    product.images.push(image);
    await product.save();
    res.status(200).send({
      success: true,
      message: "product image updated",
    });
    await product;
  } catch (error) {
    console.log(error);
    //cast error
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid Id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error in update product controller",
    });
  }
};

export const deleteProductImageController = async (req, res) => {
  try {
    // find product
    const product = await Products.findById(req.params.id);
    // validatin
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product Not Found",
      });
    }

    // image id find
    const id = req.query.id;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "product image not found",
      });
    }

    let isExist = -1;
    product.images.forEach((item, index) => {
      if (item._id.toString() === id.toString()) isExist = index;
    });
    if (isExist < 0) {
      return res.status(404).send({
        success: false,
        message: "Image Not Found",
      });
    }
    // DELETE PRODUCT IMAGE
    await cloudinary.v2.uploader.destroy(product.images[isExist].public_id);
    product.images.splice(isExist, 1);
    await product.save();
    return res.status(200).send({
      success: true,
      message: "Product Image Deleted Successfully",
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
      message: "Error In Get DELETE Product IMAGE API",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    // find product
    const product = await Products.findById(req.params.id);
    // validation
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "product not found",
      });
    }

    // find and delete image cloudinary
    for (let index = 0; index < product.images.length; index++) {
      await cloudinary.v2.uploader.destroy(product.images[index].public_id);
    }
    await product.deleteOne();
    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
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
      message: "Error In Get DELETE Product IMAGE API",
      error,
    });
  }
};
