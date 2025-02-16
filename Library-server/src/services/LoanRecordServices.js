import LoanRecordModel from "../models/LoanRecordModel.js";
import { findBookById, modifyBook } from "./BookServices.js";



export async function generateRecord(record) {
    try {
        let createdRecord = new LoanRecordModel(record);
        createdRecord = await createdRecord.save();
        
        let book = await findBookById(record.item);
        if (!book) {
            throw new Error("Book not found");
        }
        let records = book.records;

        records = [createdRecord, ...records];
        book.records = records;

        await modifyBook(book);
        return createdRecord;

    } catch (error) {
        throw new Error({message: "Error Generating Book Records", error: error.message});
    }
};


export async function modifyRecords(record) {
    try {
        const updatedRecord = await LoanRecordModel.findOneAndUpdate({_id: record._id}, record, { new: true });
        if(updatedRecord) {
           
            let book = await findBookById(record.item);
            let records = book.records;

            records[0] = updatedRecord;
            book.records = records;

            await modifyBook(book);

            return updatedRecord;
        }

        throw new Error({message: "Error Updating Book Records"});

    } catch (error) {
        throw new Error({message: "Error Updating Book Records", error: error.message});
    }
}


export async function findAllRecords() {
    try {
        return await LoanRecordModel.find();
    } catch (error) {
        throw new Error("Cannot fetch all records at the moment");
    }
};


export async function queryRecords(params) {
    try {
        return await LoanRecordModel.find({[params.property]: params.value}).populate("item").sort("-loanedDate");
    } catch (error) {
        throw new Error("Cannot fetch requested records at the moment");
    }
};