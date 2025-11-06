import express from "express";
import FilmsDB from "../FilmsDB.js";
// Router to get the list of all Films
const router = express.Router();

router.get("/countFilms", async(req, res)=>{
    try {
        const total = await FilmsDB.countFilms();
        res.json({
            filmCount: total,
        });
    } catch (error) {
        console.error("Error getting film count", error);
    }
});

export default router; 