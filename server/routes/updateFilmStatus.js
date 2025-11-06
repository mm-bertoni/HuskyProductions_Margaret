import express from "express";
import FilmsDB from "../FilmsDB.js";
// Router to get the list of all Films
const router = express.Router();

router.use(express.urlencoded({extended: true}));

// Looks for post requests to delete something
router.post("/updateFilmStatus", (req,res)=>{
    FilmsDB.updateStatus(req.body.director, req.body.title, req.body.genre, req.body.screener,req.body.status);
    console.log("Updated Film:", req.body.title);
    
});

export default router;