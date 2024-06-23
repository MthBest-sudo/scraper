import puppeteer from 'puppeteer';
import { Ad, Root } from './Bamatypes.js';
import { getEnvValue, setEnvValue } from './env.js';
import { send_messages } from './sendMessage.js';
const attempts = 3
export const getPhoneNumber = async (ads:Ad[]) => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    // Navigate the page 0to a URL
    const phoneNumbers: string[] = []
    for (const ad of ads) {
        if(ad.detail?.title==undefined)throw new Error("Title is nill");
        if (ad.type === "ad") {
            if (ad.type === "ad") {
                await page.goto('https://bama.ir' + ad.detail?.url);
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
                send_messages("09100261726", ad.detail?.title)
            }
        }
    };
    await browser.close();
}
const res = await fetch("https://bama.ir/cad/api/search?mileageFrom=0&mileageTo=0&region=kermanshah&pageIndex=0", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "traceparent": "00-cc344bd708e4bfdb5b12e70b428eb11f-d1a56a0db0e70cc2-01",
        "x-user-context": "71dd6bbb-ecf7-4bea-bd73-e0a2a3426e19",
        "cookie": "auth.globalUserContextId=71dd6bbb-ecf7-4bea-bd73-e0a2a3426e19; auth.strategy=oidc"
    },
    "referrerPolicy": "no-referrer",
    "body": null,
    "method": "GET"
});
const data: Root = await res.json()
const ads:Ad[] = []
const last_ad = getEnvValue("last_bama_ad")
for(const ad of data.data.ads){
    ads.push(ad)
    if(ad.detail?.code==last_ad){
        break;
    }
}
await getPhoneNumber(ads)