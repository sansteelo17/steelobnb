import prisma from '@/app/lib/prisma-db'

export default async function getListigs() {
    try{
     const listings = await prisma.listing.findMany({
        orderBy: {
            createdAt: 'desc'
        }
     })

     const safeListings = listings.map((listing) => ({
        ...listing,
        createdAt: listing.createdAt.toISOString()
     }))

     return safeListings
    } catch(e: any) {
     throw new Error(e)
    }
}