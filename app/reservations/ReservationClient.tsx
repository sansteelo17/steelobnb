"use client";

import toast from "react-hot-toast";
import axios from "axios";

import { FC, useState, useCallback } from "react";
import { ReservationClient } from "../interfaces/interface";
import { useRouter } from "next/navigation";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingItem from "../components/Listings/ListingItem";
import { SafeReservation } from "../types/types";

const ReservationClient: FC<ReservationClient> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation canceled");
          router.refresh();
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setDeletingId(""));
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div className="mt-10 grid grid-cols 1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation: SafeReservation) => (
          <ListingItem
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationClient;
