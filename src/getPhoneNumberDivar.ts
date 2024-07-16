import { send_messages } from './sendMessage.js';
import { lattofa } from './lattofa.js';
import {writeFileSync} from "fs"

export const getPhoneNumber = async (token: string, auth_Token: string[], title: string) => {
    const attemps = auth_Token.length - 1
    let attempt = 0
    const res = await fetch(`https://api.divar.ir/v8/postcontact/web/contact_info/${token}`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.7",
            "authorization": `Basic ${auth_Token[attempt]}`,
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
    const data = await res.json()
    if (Math.floor(res.status/100) == 4 || Math.floor(res.status/100) == 5 ) console.log(data)
    const PhoneNumber: string = data.widget_list[0].data.value
    if (!PhoneNumber) throw new Error("Divar Phone Number Not Found");
    if(PhoneNumber.includes("پیام در چت")) return;
    console.log(lattofa(PhoneNumber) + " found in divar")
    try {
        send_messages(lattofa(PhoneNumber), title)
    } catch { }
}
