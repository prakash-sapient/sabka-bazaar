import { BASE_URL } from "app/app.config";
export const APIEndPoints = {
  getCategories: {
    method: "GET",
    api: (input: APIInput) => `/categories/index.get.json`,
  },
};

export interface APIDef {
  method: string;
  api: any;
  isWhiteListed?: boolean;
}

export interface APIInput {
  id?: any;
}
