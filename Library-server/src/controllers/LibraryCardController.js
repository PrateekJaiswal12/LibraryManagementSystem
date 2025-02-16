import { registerLibraryCard, findLibraryCard } from "../services/LibraryCardServices.js"

async function getLibraryCard(req, res) {
    const {cardId} = req.params;

    try {
        const libraryCard = await findLibraryCard(cardId);
        res.status(200).json({message: "retrived the user card successfully", libraryCard});
    } catch (error) {
        res.status(500).json({message: "Unable to retrive the library card"});
    }
}


async function createLibraryCard(req, res) {
    const card = req.body;

    try {
        const libraryCard = await registerLibraryCard(card);

        res.status(200).json({message: "Generated/Fetched the library card successfully", libraryCard});
    } catch (error) {
        res.status(500).json({message: "Unable to generate the library card at this moment"});
    }
}


export { getLibraryCard, createLibraryCard };