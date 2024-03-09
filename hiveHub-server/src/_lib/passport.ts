import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { User } from '../auth/infrastructure/database/models/userModel';
import { genereateToken } from './jwt';


const clientId: any = '855944358734-cqop8tmu2emlmhsu03ue61ubgbb6olkg.apps.googleusercontent.com';
const clientSecret: any = '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';
const secretKey: string = 'your_secret_key';

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user: any, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: 'http://localhost:7700/auth/google/callback',
    passReqToCallback: true,
    scope: ['profile', 'email']
}, async (requset: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
    try {
        
        const existingUser = await User.findOne({ email: profile._json.email });
        if (existingUser) {            
        
            done(null, existingUser);
        } else {
            const newUser = await new User({
                fullName: profile.displayName,
                email: profile._json.email,
                password: profile.id,
                isVerified: true,
                isActive: true,
                role: 'user',
                username: profile.displayName,
            }).save();
  
            done(null, newUser);
        }
    } catch (error) {
        done(error, null);
    }
}));
