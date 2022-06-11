import { APIEndPoints } from "./https/APIEndPoint";
import { RestAPIService } from "./https/rest-api.service";
import { CategoryItem } from "app/core/models/interfaces/CategoryItem";

export class CategoryService {
  restApiService = new RestAPIService();
  async getCategory() {
    try {
      const result = await this.restApiService.invoke(
        APIEndPoints.getCategories
      );
      return result?.data.map((elem: any) => new CategoryItem({ ...elem }));
    } catch (error) {
      return error;
    }
  }
}
