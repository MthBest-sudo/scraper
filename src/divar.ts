import {parse} from "./divarPareser.js"
import {  divar_res} from "./DivarTypes.js";
import { getEnvValue, setEnvValue } from "./env.js";
import { getPhoneNumber } from "./getPhoneNumberDivar.js";
import {writeFileSync} from "fs"
//divar token for auth life time of 60 days 
const token = getEnvValue("coockies")?.split(",")
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIzYzVlZGMyNy0wMjQ4LTRiNWYtYjNjMC0zYWY2ZDY4ZjhkYTYiLCJ1c2VyLXR5cGUiOiJwZXJzb25hbCIsInVzZXItdHlwZS1mYSI6Ilx1MDY3ZVx1MDY0Nlx1MDY0NCBcdTA2MzRcdTA2MmVcdTA2MzVcdTA2Y2MiLCJ1c2VyIjoiMDkxMDAyNjE3MjYiLCJpc3MiOiJhdXRoIiwidmVyaWZpZWRfdGltZSI6MTcxNzI0NTA5MywiaWF0IjoxNzE3MjQ1MDkzLCJleHAiOjE3MjI0MjkwOTN9.uN__5DdyPb03sD6m5JmpsgoLUwvxsRyudfbp1ILc5EA"
export const divar =async ()=>{
  let attempt = 0
  const attempts = 5
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
      let data:divar_res = JSON.parse(trimedDom)
      //@ts-ignore
      if (!data) throw new Error("data couldn't be find");
      const items: string[] = []
      const titles: string[] = []
      const last_ad = getEnvValue("last_divar_ad")
      let divar_retry = Number(getEnvValue("divar_tries"))
      let divar_date = new Date(getEnvValue("divar_date")!)
      const today=  new Date(Date.now())
      if(divar_date.getDay()!=today.getDay()){
        divar_retry=0;
      }
      let i=0
      for (const ad of data.nb.listWidgets) {
        if (ad.data.actionLog.server_side_info.info.post_token == last_ad || i==2||divar_retry==10) {
          break
        }
        i+=1;
        divar_retry+=1;
        if (ad.data?.KEY_PROP_NAME && ad.data?.title) {
          items.push(ad.data.actionLog.server_side_info.info.post_token)
          titles.push(ad.data.title)
        }
      }
      setEnvValue("last_divar_ad", data.nb.listWidgets[0].data.actionLog.server_side_info.info.post_token)
      setEnvValue("divar_date", new Date(Date.now()).toDateString())
      setEnvValue("divar_tries", divar_retry)
      if (titles.length != items.length) throw new Error("title length and token don't add up propbebly the was nil value ");
      if (!token) throw new Error("Tokens are nill");
      for (let i = 0; i < items.length; i++) {
        getPhoneNumber(items[i], token, titles[i])
      }
    }