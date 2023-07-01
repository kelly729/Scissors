import { customAlphabet } from 'nanoid'
export const Shortid=()=>{
    
 const nanoid=customAlphabet('1234567890abcdef', 10)
 const shortid=nanoid()
return shortid
}