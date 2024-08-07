import {  Root } from "./Bamatypes.js";
import { getEnvValue, setEnvValue } from "./env.js";
import { getPhoneNumber } from "./getPhoneNumberBama.js";
export const bama  =async()=>{
const res= await fetch("https://bama.ir/cad/api/search?mileageFrom=0&mileageTo=0&region=kermanshah&pageIndex=0", {
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
console.log(res.status)
const data:Root = await res.json()
const tokens:string[] = []
const title:string[] = []
const last_ad = getEnvValue("last_bama_ad")
for(const ad of data.data.ads){
    if(ad.detail?.code==last_ad){
        break;
    }
  if (ad.detail?.code && ad.detail?.title) {
    tokens.push(ad.detail?.code)
    title.push(ad.detail?.title)
  }
}
setEnvValue("last_bama_ad",data.data.ads[0].detail?.code)
if (title.length != tokens.length) throw new Error("title length and token don't add up propbebly the was nil value ");
  for (let i = 0; i < title.length; i++) {
    await getPhoneNumber(tokens[i],title[i])
  }
}