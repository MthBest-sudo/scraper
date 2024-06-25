import {  Ad } from './Bamatypes';
import { Cluster } from 'puppeteer-cluster';
import { send_messages } from './sendMessage.js';
import puppeteer,{ executablePath } from 'puppeteer';
export const getPhoneNumber = async (ads:Ad[]) => {
  // Launch the browser and open a new blank page
  const cluster:Cluster<Ad> = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
    puppeteer,
    puppeteerOptions: {
      executablePath: "/usr/bin/google-chrome",
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  });
  cluster.task(async({page,data})=>{
    if (!data.detail?.title) throw new Error("title is nill")
    if (data.type === "ad") {
      await page.goto('https://bama.ir' + data.detail?.url);
      // Wait and click on first result
      const searchResultSelector = '.bama-call-to-seller__button';
      await page.waitForSelector(searchResultSelector);
      await page.click(searchResultSelector);
      const textSelector = await page.waitForSelector(
        ".bama-call-to-seller__number-text"
        , { timeout: 5000 }
      );
      const phoneNumber = await textSelector?.evaluate(el => el.textContent);
      if (!phoneNumber) throw new Error("phone number is nill please check")
      console.log(phoneNumber.replace(/\s/g, ""), "found in bama")
      send_messages(phoneNumber, data.detail?.title)
    }
  })
    for (const ad of ads) {
        cluster.queue(ad)
    }
    await cluster.idle()
    await cluster.close();
};