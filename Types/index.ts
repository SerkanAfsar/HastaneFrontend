import { ReadonlyURLSearchParams } from "next/navigation";
export type BaseServiceType = {
  method?: string | "GET";
  url: string;
  body?: object | null;
};

export type SlugPageProps = {
  params: {
    slug: string[];
  };
  searchParams: ReadonlyURLSearchParams;
};

export type ResultType<T> = {
  success: boolean;
  errorList?: string[];
  statusCode: number;
  entity?: T | null;
  entities?: T[] | null;
};

export type City = {
  cityName: string;
  citySlug: string;
  hospitals?: Hospital[] | null;
};

export type Hospital = {
  name: string;
  description?: string;
  address: string;
  phone: string;
  eMail: string;
  webSite: string;
  cityName: string;
  district: string;
  latitude: number;
  longitude: number;
  id: number;
};

type ItemType = {
  url: string;
  pathName: string;
};

export type BreadCrumbType = {
  list: ItemType[];
};

export type District = {
  name: string;
  url: string;
};

export type DistrictList = {
  cityName: string | null;
  cityUrl: string | null;
  districts: District[] | null;
};

export type HospitalsContainerType = DistrictList & {
  hospitals: Hospital[] | null;
};
