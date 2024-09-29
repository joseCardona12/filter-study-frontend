import { IAuth } from "@/interfaces/authInterface";
import { IUser } from "@/interfaces/userInterface";

export default class AuthService{
    static async login(user:Partial<IUser>):Promise<IAuth| {message: string} | undefined>{
        try{
            const response = await fetch("/api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if(!response.ok) throw new Error("Error with the response");
            return await response.json();
        }catch(error){
             console.log({message: "Error with the method login", error})
        }
    }
}