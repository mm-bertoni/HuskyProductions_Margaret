import express from "express";
import FilmDB from "../FilmsDB";
// Router to get the list of all Films
const router = express.Router();

router.get("/films", async (req, res)=>{
    // Try to get the films
    try {
        const films = await FilmDB.getFilms();
        res.json({
            films,
        });
    } catch (error){
        console.error("Error getting the films", error);
        res.status(500).json({error: "Internal Server Error", films: []});
}
});

export default router; 