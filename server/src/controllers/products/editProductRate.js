const {
  editProductRateQuery,
  getProductByIdQuery,
} = require("../../database/queries/products");

const editProductRate = async (req, res) => {
  const { productId, rate } = req.body;

  if (rate > 5 || rate < 0) {
    return res
      .status(400)
      .json({ message: "your rate should be between 0 and 5" });
  }

  const { rows } = await getProductByIdQuery((id = productId));

  const newRate = Math.floor((+rows[0].rate + +rate) / 2);
  const { rows: updatedRate } = await editProductRateQuery({productId, rate: newRate});

  return res.status(202).json({message: 'rate for this product updated', data: updatedRate[0]})
};

module.exports = editProductRate;
