import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends          ResponseModel{
    data:Product[]
}