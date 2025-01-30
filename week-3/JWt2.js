const JWT=require("jsonwebtoken");
const zod=require("zod");

const emailschema=zod.string().email();
const passwordschema=zod.string().min(6);


function generate(username,password)
{
    const usernameresponse=emailschema.safeParse(username);
    const passwordresponse=passwordschema.safeParse(password);

    if(!usernameresponse.success || !passwordresponse.success)
    {
        return null;
    }

    const token=JWT.sign({
        username
    },"secret");
}

function decode(token)
{
    const decodedinfo= JWT.decode(token);
    if(decodedinfo)
        return true;
    else
    return false;
}

function verify(token,protocol)
{
    let ans=true;
    try{
        JWT.verify(token,protocol);
    }
    catch(e)
    {
        ans =false;
    }
    return ans;
}