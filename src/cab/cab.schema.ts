import { Schema, Types } from "mongoose";

export const CabSchema = new Schema({
    registrationNumber: { type: String, unique: true },
    makeModel: { type: String },
    color: { type: String },
    pink: { type: Boolean },
    driverId: { type: Types.ObjectId }
});