import Products from '../model/product.model.js'

export const getProducts = (req,res) => {
    res.send("Obteniendo datos")
}
export const createProducts = async (req,res)=>{
    try {
        const {name,price} = req.body
        await Products.sync()
        const createProduct= await Products.create({name,price}) 
        res.json({
            status:"success",
            message:"Product successfully created",
            id:createProduct.id
        })    
    } catch (error) {
        res.json(error)
    } 
}