const jwt=require("jsonwebtoken");
const jwtPassword="iamanoob";
const zod=require("zod");


const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);
function signJwt(username,password){
    const usernameResponse=emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature=jwt.sign({
        username
    },jwtPassword)

    return signature;
}