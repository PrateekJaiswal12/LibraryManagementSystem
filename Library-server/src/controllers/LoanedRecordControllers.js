import { findAllRecords, generateRecord, modifyRecords, queryRecords } from "../services/LoanRecordServices.js";


async function createRecords(req, res) {
    const record = req.body;

    try {
        const createdRecord = await generateRecord(record);
        res.status(201).json({message: "New Record created successfully",record: createdRecord});

    } catch (error) {
        res.status(500).json({message: "Unable to generate new record at this moment", error});
    }
}

async function updateRecord(req, res) {
    const record = req.body;

    try {
        const updatedRecord = await modifyRecords(record);
        if(!updateRecord) {
            res.status(404).json({message: "Unable to update records which doesn't exist"});
        }
        res.status(202).json({message: "Records updated successfully",record: updatedRecord});
    } catch (error) {
        res.status(500).json({message: "Unable to update records at this moment", error});
    }
};


async function getAllRecords(req, res) {
    try {
        const records = await findAllRecords();
        res.status(202).json({message: "Retrieved all records", records});
    } catch (error) {
        res.status(500).json({message: "Unable to fetch all records at this moment"});
    }
};

async function getRecordsByProperty(req, res) {
    const param = req.body

    try {
        const records = await queryRecords(param);
        res.status(200).json({message: "Retrieved records from query", records});
    } catch (error) {
        res.status(500).json({message: "Unable to fetch records at this moment"});
    }
};


export { createRecords, updateRecord, getAllRecords, getRecordsByProperty };