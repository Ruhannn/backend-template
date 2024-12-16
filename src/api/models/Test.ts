import { model, Schema } from "mongoose"
import { ITestSchema } from "../@types"

const testSchema = new Schema<ITestSchema>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false,
})

export const test = model<ITestSchema>("test", testSchema, "collectionName") // add collection