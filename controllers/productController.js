const Product = require("../models/productModel");
module.exports = {
  getAll: async (req, res) => {
    const product = await Product.find({});
    res.status(200).json(product);
  },
  get: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  },
  post: async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  },
  put: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res
          .status(404)
          .json({ message: `cannot find any product with ${id} id` });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOneAndDelete(id);
      if (!product) {
        return res
          .status(404)
          .json({ message: `cannot find any product with ${id} id` });
      }

      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },
};
