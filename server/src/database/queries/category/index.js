const addNewCategoryQuery = require('./addNewCategoryQuery');
const deleteCategoryQuey = require('./deleteCategoryQuery');
const editCategoryNameQuery = require('./editCategoryQuery');
const getAllCategoriesQuery = require('./getAllCategoriesQuery');
const getCartgoryByIdQuery = require('./getCategoryByIdQuery');
const getCategoryByNameQuery = require('./getCategoryByNameQuery');
module.exports = {
  getAllCategoriesQuery,
  addNewCategoryQuery,
  getCategoryByNameQuery,
  deleteCategoryQuey,
  editCategoryNameQuery,
  getCartgoryByIdQuery,
};
