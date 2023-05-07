import { User } from "@prisma/client"
import { IconType } from "react-icons/lib/esm/iconBase";

export type SafeUser = Omit<
User,
'createdAt' | 'updatedAt'| 'emailVerified'
> & {
  createdAt: string,
  updatedAt: string,
  emailVerified: string | null
}

export type CategoriesType = 
  {
    label: string,
    icon: IconType,
    description: string
  }

export type CountrySelectValueType = {
  flag: string,
  label: string,
  latlng: number[],
  region: string,
  value: string
}  
