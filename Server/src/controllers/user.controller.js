import Users from "./../models/user.model.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, city, country, phone } = req.body;
    // validation
    if (
      !name ||
      !email ||
      !password ||
      !city ||
      !address ||
      !country ||
      !phone
    ) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //check exisiting user
    const exisitingUSer = await Users.findOne({ email });
    //validation
    if (exisitingUSer) {
      return res.status(400).send({
        success: false,
        message: "Email already taken.",
      });
    }
    const user = await Users.create({
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "Registration successful, please log in.",
      user,
    });
  } catch (error) {
    console.error("Error in Register API:", error);
    res.status(500).send({
      success: false,
      message: "An error occurred during registration.",
      error: error.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please enter email or password",
      });
    }

    //check user
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    //token
    const token = user.generateToken();

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV === "development" ? true : false,
        httpOnly: process.env.NODE_ENV === "development" ? true : false,
        sameSite: process.env.NODE_ENV === "development" ? true : false,
      })
      .send({
        success: true,
        message: "Login Successfully",
        token,
        user,
      });
  } catch (error) {
    console.error("Error in login API", error);
    res.status(500).send({
      success: false,
      message: "An error occured during Login",
      error: error.message,
    });
  }
};

export const getUserController = async (req, res) => {
  const user = await Users.findById(req.user._id);
  user.password = undefined;
  try {
    res.status(200).send({
      success: true,
      message: "User Profile fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Profile Api",
      error,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        secure: process.env.NODE_ENV === "development" ? true : false,
        httpOnly: process.env.NODE_ENV === "development" ? true : false,
        sameSite: process.env.NODE_ENV === "development" ? true : false,
      })
      .send({
        success: true,
        message: "Logout Successfull",
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Logout API",
      error,
    });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const user = await Users.findById(req.user._id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    // Extract fields from the request body
    const { name, email, address, city, country, phone } = req.body;

    // Update the user's fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (address) user.address = address;
    if (city) user.city = city;
    if (country) user.country = country;
    if (phone) user.phone = phone;

    // Save the updated user
    await user.save();

    res.status(200).send({
      success: true,
      message: "User Profile Updated",
    });
  } catch (error) {
    console.error("Error in Update API:", error);
    res.status(500).send({
      success: false,
      message: "Error in Update API",
      error: error.message,
    });
  }
};

export const updatePasswordController = async (req, res) => {
  try {
    const user = await Users.findById(req.user._id);
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(500).send({
        success: false,
        message: "Please provide old and new password",
      });
    }
    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid old password",
      });
    }
    user.password = newPassword;

    await user.save();

    res.status(200).send({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update password controller",
    });
  }
};
