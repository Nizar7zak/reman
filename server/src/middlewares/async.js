const asyncMiddleWare = (handler) => async (req, res, next) => {
  try {
    await handler(req, res);
  } catch (error) {
    next(error);
  }
};

module.exports = asyncMiddleWare;
