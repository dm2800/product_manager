const Product = require("../models/product.model");

module.exports = {
    //GET ALL 
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts)=> {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err)=> {
                console.log("Find All Products failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },
    //CREATE 
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct)=> {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewProduct.")
                //we set the response status of 400 to display our err, which is the rejection of our promise. 
                // a 400 status means our client is talking to our server just fine, but the client isn't sending good info. 
                // This is how we will eventually display our validations from the server in react!
                // A 404 status error means you're not calling to the right place or your server is not set up properly. 
                // On the flip-side, a status of 200 means we are looking good! 
                res.status(400).json(err);
                console.log(err);
            })
    },

   // GET ONE 
    findOneProduct: (req, res)=>{
    Product.findOne({_id: req.params.id})
        .then((oneProduct)=> {
            console.log(oneProduct);
            res.json(oneProduct)
        })
        .catch((err)=>{
            console.log("Find One Product Failed");
            res.json({message: "Something went wrong in findOneProduct", error: err})
            console.log(err);
        })
    },

    //DELETE
    deleteProduct: (req, res)=>{
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct)=> {
                console.log(deletedProduct);
                res.json(deletedProduct)
            })
            .catch((err)=>{
                console.log("Delete  Product Failed");
                res.json({message: "Something went wrong in Delete Product", error: err})
            })
    },

    //UPDATE 
    updateProduct: (req, res)=>{
        Product.findOneAndUpdate({_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedProduct)=> {
                console.log(updatedProduct);
                res.json(updatedProduct)
            })
            .catch((err)=>{
                console.log("Something went wrong in Update Product");! 
                res.status(400).json(err);
            })
    },
}