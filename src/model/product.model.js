import {DataTypes,Model } from "sequelize";
import { sequelize } from "../database/database.js";

class Products extends Model {}

Products.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Products' // We need to choose the model name
  });


export default Products