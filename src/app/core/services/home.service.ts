import { APIEndPoints } from "./https/APIEndPoint";
import { RestAPIService } from "./https/rest-api.service";
import { HomeBanner } from "app/core/models/interfaces/HomeBanner";

export class HomeService {
  restApiService = new RestAPIService();
  async getBanners() {
    try {
      const result = await this.restApiService.invoke(APIEndPoints.getBanners);
      return result?.data.map((elem: any) => new HomeBanner({ ...elem }));
    } catch (error) {
      return error;
    }
  }
}
