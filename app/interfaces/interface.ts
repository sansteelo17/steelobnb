import { MouseEvent } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons/lib/esm/iconBase";
import { CountrySelectValueType, SafeListing, SafeReservation, SafeUser } from "../types/types";
import { Reservation } from "@prisma/client";
import { Range, RangeKeyDict } from "react-date-range";

export interface ModalItem {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: JSX.Element;
  footer?: JSX.Element;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

export interface Button {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export interface ModalStore {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

export interface Heading {
  title: string,
  subtitle?: string,
  center?: boolean
}

export interface Input {
  id: string,
  label: string,
  type?: string,
  disabled?: boolean,
  formatPrice?: boolean,
  required?: boolean,
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}

export interface ClientOnly {
  children: React.ReactNode;
}

export interface CurrentUser {
  currentUser: SafeUser | null
}

export interface Avatar {
  src?: string | null | undefined
}

export interface CategoryBox {
  icon: IconType,
  label: string,
  selected?: boolean
  description?: string
}

export interface CategoryInput {
  icon: IconType,
  label: string,
  selected?: boolean,
  onClick: (value: string) => void
}

export interface CountrySelect {
  value?: CountrySelectValueType,
  onChange: (value: CountrySelectValueType) => void
}

export interface Map {
  center?: number[]
}

export interface Counter {
  title: string,
  subtitle: string,
  value: number,
  onChange: (value: number) => void
}

export interface ImageUpload {
  onChange: (value: string) => void
  value: string
}

export interface EmptyState {
  title?: string,
  subtitle?: string,
  showReset?: boolean
}

export interface ListingItem {
  data: SafeListing,
  reservation?: Reservation,
  onAction?: (id: string) => void,
  disabled?: boolean,
  actionLabel?: string,
  actionId?: string,
  currentUser?: SafeUser | null
}

export interface HeartButton {
  listingId: string,
  currentUser?: SafeUser | null
}

export interface ListingsParams {
  listingId: string
}

export interface OptionalListingsParams {
  listingId?: string
}

export interface UseFavoriteHook {
  listingId: string,
  currentUser?: SafeUser | null
}

export interface ListingClient {
  listing: SafeListing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
  reservations?: SafeReservation[]
}

export interface ListingHead {
  title: string,
  locationValue: string,
  imageSrc: string,
  id: string,
  currentUser?: SafeUser | null
}

export interface ListingInfo {
  user: SafeUser
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  category: {
    icon: IconType,
    label: string,
    description: string
  } | undefined
  locationValue: string
}

export interface ListingCategory {
  icon: IconType,
  description: string,
  label: string
}

export interface ListingReservation {
  price: number
  dateRange: Range,
  totalPrice: number,
  onChangeDate: (value: Range) => void,
  onSubmit: () => void,
  disabled?: boolean,
  disabledDates: Date[]
}

export interface Calender {
  value: Range,
  onChange: (value: RangeKeyDict) => void,
  disabledDates?: Date[]
}

export interface GetReservationsParams {
  listingId?: string,
  userId?: string,
  authorId?: string
}
