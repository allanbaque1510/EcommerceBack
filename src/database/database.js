import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DATABASE || "ecommerce",
    process.env.USER_DATABASE || "root",
    process.env.PASSWORD_DATABASE || "",
    {
    host: process.env.HOST_DATABASE || 'localhost',
    dialect: process.env.CONTROLLER_DATABASE ||'mysql',
    port: process.env.PORT_DATABASE ||3306
})