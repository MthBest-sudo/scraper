import puppeteer, { CookieParam } from "puppeteer";
import { Item, Root } from "./DivarTypes.js";
import { sleep } from "./sleep.js";
import { parse } from "./divarPareser.js";
import { retry } from "./retry.js";
import { getEnvValue } from "./env.js";
import { send_messages } from "./sendMessage.js";
const attempts = 3
export const getPhoneNumber = async (ads:Item[],Token:string) => {
    const phoneNumbers:string[]= []
  // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    //seting coockies
    const tokenCoockie: CookieParam[] = [{ name: "token", value: Token,path:"/",domain:".divar.ir",expires:-1,secure:false,priority:"Medium",sameSite:"Lax",sourceScheme:"Secure"}]

    await page.goto('https://divar.ir');
    await page.setCookie(...tokenCoockie)
    // Navigate the page to a URL
    for (const ad of items.slice(0,4)) {
        await page.goto('https://divar.ir' + ad.data.action.props.to);
        // Wait and click on first result
        const searchResultSelector = '.kt-button.kt-button--primary.post-actions__get-contact';
        await page.waitForSelector(searchResultSelector);
        await page.click(searchResultSelector);
        let attempt = 0
        while (attempt < attempts) {
            try {
                // Locate the full title with a unique string
                const textSelector = await page.waitForSelector(
                    '#app > div:nth-child(1) > div > div > main > article > div > div.kt-col-5 > section:nth-child(1) > div.expandable-box > div.copy-row > div > div.kt-base-row__end.kt-unexpandable-row__value-box > a', { timeout: 1000 }
                );
                const phoneNumber = await textSelector?.evaluate(el => el.textContent);
                if(!phoneNumber) throw new Error("phone number not found somthing went worng ")
                // Print the full title
                send_messages("09100261726",ad.data.title)
                break;
            } catch {
                try {
                    const conformation = await page.waitForSelector(".kt-button.kt-button--primary.full-width",{timeout:1000})
                    conformation?.click()
                } catch { }
                await sleep(1000)
                attempt++
            }
        }
    }
    await browser.close();
};
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIzYzVlZGMyNy0wMjQ4LTRiNWYtYjNjMC0zYWY2ZDY4ZjhkYTYiLCJ1c2VyLXR5cGUiOiJwZXJzb25hbCIsInVzZXItdHlwZS1mYSI6Ilx1MDY3ZVx1MDY0Nlx1MDY0NCBcdTA2MzRcdTA2MmVcdTA2MzVcdTA2Y2MiLCJ1c2VyIjoiMDkxMDAyNjE3MjYiLCJpc3MiOiJhdXRoIiwidmVyaWZpZWRfdGltZSI6MTcxNzI0NTA5MywiaWF0IjoxNzE3MjQ1MDkzLCJleHAiOjE3MjI0MjkwOTN9.uN__5DdyPb03sD6m5JmpsgoLUwvxsRyudfbp1ILc5EA"
  const res = await fetch('https://divar.ir/s/kermanshah-province/car?usage=0-0', {
    headers: {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'accept-language': 'en-US,en;q=0.9',
      'cache-control': 'max-age=0',
      'cookie': 'did=25aebd13-9332-40ae-945c-575152932fcc; city=tehran; multi-city=kermanshah-province%7C; token=; chat_opened=; sessionid=; FEATURE_FLAG=%7B%22flags%22%3A%7B%22enable-post-list-v2-web%22%3A%7B%22name%22%3A%22enable-post-list-v2-web%22%2C%22bool_value%22%3Afalse%2C%22routeLabels%22%3A%5B%22browse%22%5D%7D%2C%22custom_404_experiment%22%3A%7B%22name%22%3A%22custom_404_experiment%22%2C%22bool_value%22%3Afalse%7D%2C%22WEB_REQUEST_WITH_TOKEN_ENABLED%22%3A%7B%22name%22%3A%22WEB_REQUEST_WITH_TOKEN_ENABLED%22%2C%22bool_value%22%3Afalse%7D%2C%22web_shopping_assistant_enabled%22%3A%7B%22name%22%3A%22web_shopping_assistant_enabled%22%2C%22bool_value%22%3Afalse%7D%7D%2C%22evaluatedAt%22%3A%222024-06-01T06%3A52%3A24.363593879Z%22%2C%22maximumCacheUsageSecondsOnError%22%3A86400%2C%22minimumRefetchIntervalSeconds%22%3A3600%2C%22expireDate%22%3A1717228344373%7D',
      'if-none-match': 'W/"d79ec-OyH+sba9IAzOcmFibuM35PXPVAE"',
      'priority': 'u=0, i',
      'sec-ch-ua': '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'sec-gpc': '1',
      'service-worker-navigation-preload': 'true',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    }
  });
  const txt: string = await res.text()
  const dom = parse(txt);
  const trimedDom = dom[5].slice(" window.__PRELOADED_STATE__ =  ".length, dom[5].lastIndexOf('};') + 1)
  retry((trimedDom)=>{
    JSON.parse(trimedDom)
  },5,10000,trimedDom)
  let data:Root =JSON.parse(trimedDom)
  const items:Item[] = []
  const last_ad = getEnvValue("last_divar_ad")
  for(const ad of data.browse.items.slice(0,3)){
    if(ad.data.token ==last_ad){
        items.push(ad)
        break
    }
    items.push(ad)
  }
  console.log(items.length)
await retry(getPhoneNumber,5,3000,items,token)