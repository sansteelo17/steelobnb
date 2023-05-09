import EmptyState from "../components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavListings from "../actions/getFavListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const favListings = await getFavListings();
  const currentUser = await getCurrentUser();

  if (favListings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient favListings={favListings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
