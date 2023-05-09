import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import { OptionalListingsParams } from "@/app/interfaces/interface";
import ListingClient from "./ListingClient";

const ListingPage = async ({ params }: { params: OptionalListingsParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing)
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );

  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;