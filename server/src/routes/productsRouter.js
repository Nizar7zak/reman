const router = require("express").Router();

const {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  editProductRate,
  deleteProductById,
} = require("../controllers");

const { auth, admin, asyncMiddleWare } = require("../middlewares");

router.get("/", asyncMiddleWare(getProducts));
router.get("/:id", asyncMiddleWare(getProductById));

router.use(asyncMiddleWare(auth));

router.patch("/rate", asyncMiddleWare(editProductRate));

router.use(asyncMiddleWare(admin));

router.post("/", asyncMiddleWare(addProduct));
router.put("/edit", asyncMiddleWare(editProduct));
router.delete("/:id", asyncMiddleWare(deleteProductById));

module.exports = router;
