import { launch } from "puppeteer";
import { flags, ignoreFlags } from "./flags.js";

console.warn("Launching Browser");

let browser = await launch({
    headless: true,
    timeout: 6 * 1000,
    args: flags,
    ignoreDefaultArgs: ignoreFlags,
});

export async function scrapper(url) {
    let context = await browser.createBrowserContext();    
    try {
        let page = await context.newPage();

        console.log("Opening Page");

        let startTime = performance.now();

        let res = await page.goto(url, {
            timeout: 60000,
            waitUntil: "networkidle2",
        });

        let endTime = performance.now();
        let responseTime = Math.round(endTime - startTime); 

        if (res.status() === 200) {
            let title = await page.title();
            let html = await page.content();
            let responseSize = Buffer.byteLength(html, 'utf8') / 1024; 

            return {
                code: res.status(),
                title: title,
                html: html,
                ms: responseTime,
                size: responseSize.toFixed(2) + " KB", 
            };
        } else {
            return {
                code: res.status(),
            };
        }
    } catch (err) {
        console.error("Error : ", err.message);
        return {
            code: "Error",
        };
    } finally {
        console.warn("Closing Context");
        await context.close();
    }
}
