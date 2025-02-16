import mongoose, { Schema } from "mongoose";
import { LoanRecordSchema } from "./LoanRecordModel.js";

const BookSchema = Schema({
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subjects: {
        type: [String],
        required: true
    },
    publicationDate :{
        type: Date,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    records: [LoanRecordSchema]
});

export const Book = mongoose.model("Book", BookSchema);