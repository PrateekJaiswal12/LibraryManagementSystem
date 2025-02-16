import LibraryCardModel from "../models/LibraryCardModel.js";

export async function registerLibraryCard(card) {
    try {
        const savedCard = new LibraryCardModel(card);
        const existedCard = await LibraryCardModel.findOne({user: card.user}).populate('user');

        if(existedCard) {
            return existedCard;
        }

        return await savedCard.save();
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function findLibraryCard(libraryCardId) {
    try {
        const card = await LibraryCardModel.findOne({_id: libraryCardId}).populate('user');
        if(!card) {
            throw new Error(`Cannot find user with given Library Card ID`);
        }

        return card;
    } catch (error) {
        throw new Error(error.message);
    }
}