import { Schema } from "mongoose";

export const DriverSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
});