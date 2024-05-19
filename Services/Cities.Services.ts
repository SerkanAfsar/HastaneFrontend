import { City, Hospital, ResultType } from "@/Types";
import { BaseService } from ".";

export const GetCityList = async (): Promise<ResultType<City>> => {
  const result = await BaseService({
    method: "GET",
    body: null,
    url: "Cities",
  });
  return result as ResultType<City>;
};
