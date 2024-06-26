import { send_messages } from './sendMessage.js';
export const getPhoneNumber = async (token:string, auth_Token: string,title:string) => {
    const res = await fetch(`https://api.divar.ir/v8/postcontact/web/contact_info/${token}`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.7",
            "authorization": `Basic ${auth_Token}`,
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
    console.log(data,res.status)
    const PhoneNumber:string =data.widget_list[0].data.value 
    if(!PhoneNumber) throw new Error("Divar Phone Number Not Found");
    console.log(PhoneNumber+"found in divar")
    send_messages(PhoneNumber,title)
};
