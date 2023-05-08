import prisma from '@/app/lib/prisma-db'

export default async function getListigs() {
    try{
     const listings = await prisma.listing.findMany({
        orderBy: {
            createdAt: 'desc'
        }
     })

     return listings
    } catch(e: any) {
     throw new Error(e)
    }
}