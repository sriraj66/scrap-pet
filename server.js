import express from "express";
import { scrapper } from "./src/scrapper.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static(path.resolve("public")));

app.post("/scrape", async (req, res) => {
    let { url } = req.body;

    if (!url) {
        return res.status(400).json({ message: "URL is required" });
    }

    console.log("Scraping Started");
    
    let result = await scrapper(url);
    // console.log(result)
    res.json(result);
});


const port = 3000;

app.listen(port, () => {
    console.log("Server Listening on %d",port)
})