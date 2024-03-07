import jwt from 'jsonwebtoken'

export const genereateToken=(payload:any)=>{

    try {
        const secret:any=process.env.jwtSecret;

      return jwt.sign(payload,secret,{algorithm:'HS256',expiresIn:60*60*30})

        
    } catch (error:any) {
        throw new Error(error.message)
    }

}