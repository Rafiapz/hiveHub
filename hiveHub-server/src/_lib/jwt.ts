import jwt from 'jsonwebtoken'

export const genereateToken=(payload:any)=>{

    try {

        console.log('payload',payload);
        
        const secret:any=process.env.jwtSecret;

      return jwt.sign(payload,secret,{algorithm:'HS256',expiresIn:60*60*10})

        
    } catch (error:any) {
        throw new Error(error.message)
    }

}

export const verifyToken=(token:string)=>{

    try {

        const secret:any=process.env.jwtSecret
        const decoded=jwt.verify(token,secret)
        if(decoded){            
           
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

export const getTokenPayloads=(token:string)=>{

    try {

        const secret:any=process.env.jwtSecret
        const decoded=jwt.verify(token,secret) as { [key: string]: any };

        

        if(decoded){
            return decoded
        }else{
            return null
        }

        
    } catch (error:any) {
        throw new Error(error.message);
        
    }
}