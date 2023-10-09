import express  from "express";
import morgan from "morgan";
import productsRoute from "../routes/products.routes.js"

const app = express()

app.use(morgan('dev'));
app.use(express.json());
app.use("/api",productsRoute)

export default app
