import prisma from '@/app/lib/prisma-db'
import { OptionalListingsParams } from '../interfaces/interface';

export default async function getListingById (params: OptionalListingsParams) {
    try {
        const { listingId } = params

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            }, 
            include: {
                user: true
            }
        })

        if(!listing) return null

        return{
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toISOString(),
                updatedAt: listing.user.updatedAt.toISOString(),
                emailVerified: listing.user.emailVerified?.toISOString() || null
            }
        }
    } catch(e: any) {
      throw new Error(e)
    }
}