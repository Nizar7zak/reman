const { getCartByIdQuery } = require("../../database/queries/cart");

const getCartData = async (req, res) => {
    const { id } = req.user;
    const {rows} = await getCartByIdQuery(id);
    return res.status(200).json({ message: 'cart loaded successfully', data: rows});
};

module.exports = getCartData;
