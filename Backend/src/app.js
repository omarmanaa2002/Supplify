const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
mongoose.set("strictQuery", false);
require("dotenv").config();
const MongoURI = process.env.MONGO_URI;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cookieParser = require("cookie-parser");

// const { requiredocAuth } = require("./Controllers/authMiddleware");


const {login} = require("./Controllers/LoginController");
const {createRestaurateur , deleteRes , getRes , getResById , updateRes} = require("./Controllers/ResController");
const {createSupplier , deleteSupp , getSupp , getSuppById , updateSupp} = require("./Controllers/SuppController");
const { createCatalogue, updateCat, getCat, deleteCat , getCatById, getProducts } = require("./Controllers/CatController");
const { createShopCart, updateShopCart, getShopCartById, getShopCart, deleteShopCart } = require("./Controllers/ShopController");
const { createOrder, updateOrder, getOrderById, getOrder, deleteOrder } = require("./Controllers/OrderController");
const { createPay, updatePay, getPayById, getPay, deletePay } = require("./Controllers/PayController");
//App variables
const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// configurations
// Mongo DB
mongoose
.connect(MongoURI)
.then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, () => {
        console.log(`Listening to requests on http://localhost:${port}`);
    });
})
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.status(200).send("You have everything installed!");
});


//Routes
// for restaurateur
app.post('/login' , login);
app.post('/res/create' , createRestaurateur);
app.post('/res/update' , updateRes);
app.get('/res/getById/:id' , getResById);
app.post('/res/get' , getRes);
app.delete('/res/delete' , deleteRes);

// for supplier
app.post('/login' , login);
app.post('/supp/create' , createSupplier);
app.post('/supp/update' , updateSupp);
app.get('/supp/getById/:id' , getSuppById);
app.post('/supp/get' , getSupp);
app.delete('/supp/delete' , deleteSupp);

// for catalogue
app.post('/Cat/create' , createCatalogue);
app.post('/Cat/update' , updateCat);
app.get('/Cat/getById/:id' , getCatById);
app.post('/Cat/get' , getCat);
app.delete('/Cat/delete' , deleteCat);
app.get('/products', getProducts);

// for Shopping cart
app.post('/Cart/create' , createShopCart);
app.post('/Cart/update' , updateShopCart);
app.get('/Cart/getById/:id' , getShopCartById);
app.post('/Cart/get' , getShopCart);
app.delete('/Cart/delete' , deleteShopCart);

// for Order
app.post('/Order/create' , createOrder);
app.post('/Order/update' , updateOrder);
app.get('/Order/getById/:id' , getOrderById);
app.post('/Order/get' , getOrder);
app.delete('/Order/delete' , deleteOrder);


// for Consultant
app.post('/Payment/create' , createPay);
app.post('/Consultant/update' , updatePay);
app.get('/Consultant/getById/:id' , getPayById);
app.post('/Consultant/get' , getPay);
app.delete('/Consultant/delete' , deletePay);

