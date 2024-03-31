import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";


export async function GET(request){
    const data = await getAllPhotos()
    return NextResponse.json(data)
}


