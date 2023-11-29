import type { AxiosResponse } from "axios";
import type { Product } from "../routes/models/Product";
import { http } from "../api";
const controller = 'clothes'

debugger
export async function GetAll(): Promise<Product[]> {
    const { data } = await http.get<Product[], AxiosResponse>(`${controller}`);
    debugger
    
    return data;
    
} 

 export async function Post(item: Product): Promise<Product> {
     debugger
    const { data } = await http.post<Product, AxiosResponse>(`${controller}`, item);
    return data;
 }

export async function Edit(item: Product, id: number): Promise<Product[]> {
    const { data } = await http.put<Product[], AxiosResponse>(`${controller}/${id}`,item);
    return data;
}
