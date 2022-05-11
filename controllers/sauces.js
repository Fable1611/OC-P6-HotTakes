const Product = require("../models/Sauce");

exports.createProduct = (req, res, next) => {
  delete req.body._id;
  const product = new Product({
    ...req.body,
  });
  product
    .save()
    .then(() => res.status(201).json({ message: "Objet Enregistre !" }))
    .catch(() => res.status(400).json({ message: "Error !" }));
};

exports.modifyProduct = (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "objet modifie!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "objet supprime!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json("objet non trouve"));
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error }));
};
