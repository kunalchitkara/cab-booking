import { Schema } from "mongoose";

export const CustomerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String }
});