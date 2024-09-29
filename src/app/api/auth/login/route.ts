import { NextRequest, NextResponse } from "next/server";
import AuthService from "../../services/authService";

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {email,password} = await req.json();
        const loginService = AuthService.loginService({email,password});
        if(!loginService || "message" in loginService){
            return NextResponse.json(loginService, {status: 400});
        }
        return NextResponse.json(loginService, {status:200});
    }catch(error:unknown){
        return NextResponse.json({message: `rror with the controller login Error:${error}`}, {status: 500})
    }
}