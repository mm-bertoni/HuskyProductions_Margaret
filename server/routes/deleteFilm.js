import express from "express";
import FilmsDB from "../FilmsDB.js";
// Router to get the list of all Films
const router = express.Router();

router.use(express.urlencoded({extended: true}));

// Looks for post requests to delete something
router.post("/deleteFilm", (req,res)=>{
    FilmsDB.deleteFilm(req.body.director, req.body.title, req.body.genre, req.body.screener);
    console.log("Deleted Film:", req.body.title);

});

export default router; 