import { BaseServiceType, ResultType } from "@/Types";

export const BaseService = async ({
  method,
  body,
  url,
}: BaseServiceType): Promise<ResultType<any>> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
      method: method || "GET",
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ClientId: `${process.env.NEXT_PUBLIC_ClientId}`,
        ClientSecret: `${process.env.NEXT_PUBLIC_Client_Secret}`,
      },
    });
    return (await response.json()) as ResultType<any>;
  } catch (err: any) {
    const result: ResultType<any> = {
      errorList: [err.message],
      success: false,
      statusCode: 500,
    };
    return result;
  }
};
