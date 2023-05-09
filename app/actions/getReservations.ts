import prisma from '@/app/lib/prisma-db'
import { GetReservationsParams } from '../interfaces/interface';

export default async function getReservations(params:GetReservationsParams) {
    try {
        const { listingId, userId, authorId } = params;
    
        const query: any = {};
            
        if (listingId) {
          query.listingId = listingId;
        };
    
        if (userId) {
          query.userId = userId;
        }
    
        if (authorId) {
          query.listing = { userId: authorId };
        }
    
        const reservations = await prisma.reservation.findMany({
          where: query,
          include: {
            listing: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
    
        const safeReservations = reservations.map(
          (reservation) => ({
          ...reservation,
          createdAt: reservation.createdAt.toISOString(),
          startDate: reservation.startDate.toISOString(),
          endDate: reservation.endDate.toISOString(),
          listing: {
            ...reservation.listing,
            createdAt: reservation.listing.createdAt.toISOString(),
          },
        }));
    
        return safeReservations;
      } catch (error: any) {
        throw new Error(error);
      }
}