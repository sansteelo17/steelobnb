"use client";

import { FC } from "react";
import { FavoritesClient } from "../interfaces/interface";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing } from "../types/types";
import ListingItem from "../components/Listings/ListingItem";

const FavoritesClient: FC<FavoritesClient> = ({ favListings, currentUser }) => {
  return (
    <Container>
      <Heading
        title="Favorite Listings"
        subtitle="You seem to love these listings the most :)"
      />
      <div className="mt-10 grid grid-cols 1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favListings.map((listing: SafeListing) => (
          <ListingItem
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
