import { parse } from "./divarPareser.js";
import { getEnvValue, setEnvValue } from "./env.js";
import {writeFileSync} from "fs"
import { Root } from "./DivarTypes.js";

const auth_token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI1NmUwNjBjZS0yYjUyLTRlMDAtOWUzNS02OGFmYTIzNTBhMzAiLCJ1c2VyLXR5cGUiOiJwZXJzb25hbCIsInVzZXItdHlwZS1mYSI6Ilx1MDY3ZVx1MDY0Nlx1MDY0NCBcdTA2MzRcdTA2MmVcdTA2MzVcdTA2Y2MiLCJ1c2VyIjoiMDkxMjc4NjUxNjQiLCJpc3MiOiJhdXRoIiwidmVyaWZpZWRfdGltZSI6MTcxOTM5NDY3NywiaWF0IjoxNzE5Mzk0Njc3LCJleHAiOjE3MjQ1Nzg2Nzd9.qQKwsWAdo3EG1MNCCuhMekXpoDEbmMV8dgUFUhffdEU"

export const getPhoneNumber = async (token:string) => {
 const res = await  fetch(`https://api.divar.ir/v8/postcontact/web/contact_info/${token}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.7",
      "authorization": `Basic ${auth_token}`,
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Brave\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "Referer": "https://divar.ir/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
  const data =await res.json()
};
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
  let data:Root =JSON.parse(trimedDom)
  const items:string[] = []
  const last_ad = getEnvValue("last_divar_ad")
  console.log(last_ad)
  for(const ad of data.browse.items){
    if(ad.data.token == last_ad){
        break
    }
    console.log(ad.data.token)
  }
  setEnvValue("last_divar_ad",data.browse.items[0].data.token)
  console.log(getEnvValue("last_divar_ad"))
  for(const token of items){
      getPhoneNumber(token)
  }