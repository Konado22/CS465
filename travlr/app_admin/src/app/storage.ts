import {InjectionToken} from '@angular/core'
export const BROWSER_STORAGE = new InjectionToken<Storage>("Browser Sotrage", 
    {
        providedIn: "root",
        factory: ()=> localStorage
    })
