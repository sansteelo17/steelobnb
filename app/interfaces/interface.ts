import { MouseEvent } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons/lib/esm/iconBase";
import { SafeUser } from "../types/types";

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

export interface CurrentUser {
  currentUser: SafeUser | null
}

export interface Avatar {
  src?: string | null | undefined
}
