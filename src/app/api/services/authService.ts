import { IUser } from "@/interfaces/userInterface";

export default class AuthService{
    static async loginService(user: Partial<IUser>):Promise<IUser | null | {message: string}>{
        const response = await fetch("https://filter-study-backend-1.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if(!response.ok)throw new Error("Error with the response");
        return await response.json();
    }
}