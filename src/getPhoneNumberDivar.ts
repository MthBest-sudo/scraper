import  { CookieParam } from 'puppeteer';
import {  Item,Root } from './DivarTypes';
import { lattofa } from './lattofa.js';
import { Cluster } from 'puppeteer-cluster';
import { send_messages } from './sendMessage.js';
export const getPhoneNumber = async (items: Item[], Token: string) => {
    const phoneNumbers: string[] = []
    //seting coockies
    const cluster:Cluster<Item,void> = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 2,
        retryDelay:10000,
        retryLimit:3,
        timeout:50000
    });
    await cluster.execute(async({page})=>{
    const tokenCoockie: CookieParam[] = [
        {
            name: "token", value: Token, path: "/", domain: ".divar.ir",
            expires: -1, secure: false, priority: "Medium",
            sameSite: "Lax", sourceScheme: "Secure"
        },
    ]
    await page.goto("https://divar.ir/s/kermanshah",{timeout:120000})
    await page.setCookie(...tokenCoockie)
    })
    await cluster.task(async ({ page, data }) => {
        await page.goto('https://divar.ir' + data.data.action.props.to);
        // Wait and click on first result
        const searchResultSelector = '.kt-button.kt-button--primary.post-actions__get-contact';
        await page.waitForSelector(searchResultSelector);
        await page.click(searchResultSelector);
        const textSelector = await page.waitForSelector(
            '#app > div:nth-child(1) > div > div > main > article > div > div.kt-col-5 > section:nth-child(1) > div.expandable-box > div.copy-row > div > div.kt-base-row__end.kt-unexpandable-row__value-box > a', { timeout: 1000 }
        );
        const phoneNumber = await textSelector?.evaluate(el => el.textContent);
        if (!phoneNumber) throw new Error("phone number is nill probebly is hidden by the user")
        send_messages(lattofa(phoneNumber),data.data.title)
    })

    for (const ad of items) {
        cluster.queue(ad)
    }

    await cluster.idle()
    await cluster.close();
};
