const total_retry = 3
let retry_count = 0
let accessToken
let refreshToken
while (retry_count < total_retry) {
    try {
        const login = await fetch("https://console.kavenegar.com/api/v1.0/identity/login", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.8",
                "content-type": "application/json",
                "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": "1",
                "cookie": "cookiesession1=678A8C336E6296C133CCFEA650A39402",
                "Referer": "https://console.kavenegar.com/membership/login",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "{\"isPersistence\":false,\"password\":\"12211221\",\"username\":\"Amirrrco73@gmail.com\",\"captchaToken\":\"\"}",
            "method": "POST"
        });
        const token = await login.json()
        accessToken = token.data.jwtLoginResponse.accessToken
        refreshToken = token.data.jwtLoginResponse.refreshToken
        break
    } catch {
        retry_count += 1
    }

}
if(!accessToken)throw new Error("couldn't fetch the login tokens");

const date =new Date()
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 since months are 0-indexed
const day = String(date.getDate()).padStart(2, '0');
const coockie_session1 = "678A8C336E6296C133CCFEA650A39402"
const user = "%7B%22data%22%3A%7B%22mobile%22%3A%220936****149%22%2C%22token%22%3Anull%2C%22jwtLoginResponse%22%3A%7B%22accessToken%22%3A%22UXGULgxeeKSqbKLafBkWOVPE%2BQdpiD%2BTZpWlSP2%2BaXMUaaLTe18Qfg%2Bf5KVBpdf9rAKEz4PbMQyvwGFCuwQ5l2Ipc498hDIyUd4LYihh8oFpslX8v5CBFFoAo%2BbLy8WyoKCyd1YJox3HJ1kjiRV%2Bcvc6vTfRnY5IRiOfUiWu5d7LHQJn5YU5Giqzgsrk05SVAZvFErU14zFqnAI53UqQbZpKAqaC%2BsF9GLGjKi%2FNu96avfCl1SmbLK7Qe4PMLcFL5otUcelmDuHEzHeNZFOdbI5oSldI8%2BVvh0FZkKAj8AHGSKEHB8FD%2FL7Iimsjo1SJpo2BJc9TiXiv6RS%2Fbh01pzxOig41rtvkZu%2F%2FOoCQkXWs7U5hF2GJwLsJ%2BcA8PvLx%22%2C%22refreshToken%22%3A%22H2S12fDYyoae%2BJqDB7MsM2U%2BDdj3iz1obFsCYJWzmT3amZlYz4V0deEcIKlGt5xExSKx5bFeHrHH61UpB18MSQ%3D%3D%22%7D%2C%22twoFaLogin%22%3Anull%7D%2C%22error%22%3A%7B%22code%22%3A0%2C%22message%22%3A%22%22%7D%7D"
export const send_messages=async(phoneNumbers:string,title:string)=>{
   const text=` سلام خودرو صفر شما ${title} را باقیمت مناسب خریدارم
    تسویه نقدی
    ادرس : کنگاور خیابان طالقانی دفتر خرید حواله و خودرو صفر
    وبسایت: rezaeekhodro.com
    شماره:09183386649`
    const body = {"sendScheduled":false,"hour":date.getHours(),"min":date.getMinutes(),
        "date":`${year}/${month}/${day}`,
        "receptors":[phoneNumbers],"message":text,"lineId":691}
    const res = await fetch("https://console.kavenegar.com/api/v1.0/send/simple", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.8",
            "content-type": "application/json",
            "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "cookie": `cookiesession1=${coockie_session1}; X-Refresh-Token=${refreshToken}; X-Access-Token=${accessToken}; user=${user}`,
            "Referer": "https://console.kavenegar.com/sends/fast",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify(body),
        "method": "POST"
    });
    console.log(await res.json())
}