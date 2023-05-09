import prisma from '@/app/lib/prisma-db'

export interface IParams {
    userId?: string
    guestCount?: number,
    roomCount?: number
    bathroomCount?: number
    startDate?: string,
    endDate?: string,
    locationValue?: string,
    category?: string
}

export default async function getListigs(params: IParams) {
    try{
      const {userId, roomCount, guestCount, bathroomCount, locationValue, startDate, endDate, category} = params
      
      let query: any = {}
    
      if(userId) query.userId = userId

      if(category) query.category = category

      if(roomCount) query.roomCount = {
        gte: Number(roomCount)
      }

      if(bathroomCount) query.bathroomCount = {
        gte: Number(bathroomCount)
      }

      if(guestCount) query.guestCount = {
        gte: Number(guestCount)
      }

      if(locationValue) query.locationValue = locationValue

      if(startDate && endDate) {
        query.NOT = {
            reservations: {
                sum: {
                    OR: [
                        {
                            endDate: {gte: startDate},
                            startDate: {lte: startDate}
                        },
                        {
                            startDate: {lte: endDate},
                            endDate: {gte: endDate},
                        }
                    ]
                }
            }
        }
      }

     const listings = await prisma.listing.findMany({
        where: query,
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