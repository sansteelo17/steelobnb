"use client";

import { useEffect, FC } from "react";

import EmptyState from "@/app/components/EmptyState";
import { ErrorState } from "./interfaces/interface";

const ErrorState: FC<ErrorState> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
