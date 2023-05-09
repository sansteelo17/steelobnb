"use client";

import { FC, useState, useCallback } from "react";
import { PropertiesClient } from "../interfaces/interface";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { SafeListing } from "../types/types";
import ListingItem from "../components/Listings/ListingItem";

const PropertiesClient: FC<PropertiesClient> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => toast.error(error?.response?.data?.error))
        .finally(() => setDeletingId(""));
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Properties" subtitle="These are your properties" />
      <div className="mt-10 grid grid-cols 1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing: SafeListing) => (
          <ListingItem
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
