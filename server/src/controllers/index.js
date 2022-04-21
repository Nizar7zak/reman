const { addToCart, getCartData } = require("./cart");
const {
  getAllCategories,
  addNewCategory,
  deleteCategory,
  editCategoryName,
} = require("./category");
const {
  getProducts,
  addProduct,
  getProductById,
  editProduct,
  deleteProductById,
  editProductRate,
} = require("./products");
const { login, signUp } = require("./users");
module.exports = {
  signUp,
  login,
  getProducts,
  addProduct,
  getProductById,
  editProduct,
  deleteProductById,
  addToCart,
  getCartData,
  getAllCategories,
  addNewCategory,
  deleteCategory,
  editCategoryName,
  editProductRate,
};
