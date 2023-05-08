"use client";

import { FC, useState, useEffect } from "react";
import { ClientOnly } from "../interfaces/interface";

const ClientOnly: FC<ClientOnly> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
