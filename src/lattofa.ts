export const lattofa=(phoneN:string)=>{
    const digitMap = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    };
    let LatPhoneN = ""
    for (let i = 0; i < phoneN.length; i++) {
        LatPhoneN += digitMap[phoneN[i]]
        if(!digitMap[phoneN[i]]) throw new Error("پبام در چت ");
        
    }
    return  LatPhoneN
}