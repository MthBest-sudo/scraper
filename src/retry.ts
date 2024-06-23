import { sleep } from "./sleep.js"

export const retry = async<T>(func:(...params:any[])=>T,Totalattempts:number,timeout:number,...params)=>{
    let attempt = 0
    while(attempt<Totalattempts){
        try{
            return await func(...params)
        }
        catch(e){
            console.error(e)
            await sleep(timeout)
            attempt++
        }
    }
}