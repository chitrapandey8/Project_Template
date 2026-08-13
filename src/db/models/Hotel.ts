import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

//declare tells what diff type of class property classs will have  to ts
class Hotel extends Model<InferAttributes<Hotel> , InferCreationAttributes<Hotel> > {
   declare id: CreationOptional<number>; //ts mai id nhi hoti uska concept
   declare name : string;
   declare address: string;
   declare location: string;
   declare createdAt: CreationOptional<Date>;
   declare updatedAt: CreationOptional<Date>;
   declare rating : number;
   declare rating_count : number;
}

//how do we connect this model with hotel table
Hotel.init({
    id:{
        type: "INTEGER",
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type:"STRING",
        allowNull:false,
    },
    address:{
        type:"STRING",
        allowNull:false,
    },
    location:{
        type:"STRING",
        allowNull: false,
    },
    createdAt:{
        type:"DATE",
        defaultValue: new Date(),
        field: 'createdAt'
    },
    updatedAt:{
        type:"DATE",
        defaultValue: new Date(),
        field: 'updatedAt'
    },
    rating:{
        type: "FLOAT",
        defaultValue: null,
    },
    rating_count:{
        type: "INTEGER",
        defaultValue: null,
    }

}, {
    tableName: "Hotels",
    sequelize: sequelize,
    underscored: true,
    timestamps: true,
});

export default Hotel;