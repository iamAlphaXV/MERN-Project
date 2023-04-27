async (req,res,next) => {

    try {
        // throw Error(`Bazinga`)
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes)
    } catch (error) {
         next(error)
    }
}