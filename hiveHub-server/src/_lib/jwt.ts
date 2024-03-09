import jwt from 'jsonwebtoken'

export const genereateToken=(payload:any)=>{

    try {

        console.log('payload',payload);
        
        const secret:any=process.env.jwtSecret;

      return jwt.sign(payload,secret,{algorithm:'HS256',expiresIn:60})

        
    } catch (error:any) {
        throw new Error(error.message)
    }

}

export const verifyToken=(token:string)=>{

    try {

        const secret:any=process.env.jwtSecret
        const decoded=jwt.verify(token,secret)
        if(decoded){
            console.log(decoded);
            if(decoded==='jwt expired'){
                return false
            }
            return true            
        }else{
            return false
        }
        
    } catch (error:any) {
        throw new Error(error.message)
    }
}