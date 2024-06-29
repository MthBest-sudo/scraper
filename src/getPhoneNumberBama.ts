import { tel_Root } from "./Bamatypes";
import { send_messages } from "./sendMessage.js";

export const getPhoneNumber = async (token:string,title:string) => {
  // Launch the browser and open a new blank page
  try{
  const res = await fetch(`https://bama.ir/cad/api/detail/${token}/phone`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Brave\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "traceparent": "00-c9782a86f40e23f3752a5b75267b7459-b1144b74f893dc1d-01",
      "x-user-context": "47c3655c-d202-432a-a23d-a2962a1f8867",
      "cookie": "auth.globalUserContextId=47c3655c-d202-432a-a23d-a2962a1f8867; auth.strategy=oidc"
    },
    "referrerPolicy": "no-referrer",
    "body": null,
    "method": "GET"
  });
  try {
    const data: tel_Root = await res.json()
    const PhoneNumber = data.data.phone[0]
    if (!PhoneNumber) throw new Error("Bama Phone Number Not Found");
    console.log(PhoneNumber + "found in bama")
    send_messages(PhoneNumber, title)
  }
  catch{

  }
};
