import { City, ResultType } from "@/Types";
import { BaseService } from ".";

export const GetCityWithHospitals = async (
  slug: string
): Promise<ResultType<City>> => {
  const result = await BaseService({
    method: "GET",
    body: null,
    url: `Cities/GetByCitySlug/${slug}`,
  });
  return result as ResultType<City>;
};
