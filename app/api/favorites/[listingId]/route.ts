import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/lib/prisma-db'
import { FavoriteListingsParams } from "@/app/interfaces/interface";

export async function POST(request: Request, {params}: {params: FavoriteListingsParams}) {
    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return NextResponse.error()
    }

    const {listingId} = params

    if(!listingId || typeof listingId !== 'string') {
        throw new Error('Invalid ID')
    }

    let favoritefields = [... (currentUser.favoritefields || [])]

    favoritefields.push(listingId)

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoritefields
        }
    })

    return NextResponse.json(user)
} 

export async function DELETE(request: Request, {params}: {params: FavoriteListingsParams}) {
    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return NextResponse.error()
    }

    const {listingId} = params

    if(!listingId || typeof listingId !== 'string') {
        throw new Error('Invalid ID')
    }

    let favoritefields = [... (currentUser.favoritefields || [])]

    favoritefields = favoritefields.filter((id) => id !== listingId)

    const user = await prisma.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoritefields
        }
    })

    return NextResponse.json(user)
}