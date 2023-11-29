import type { AxiosResponse } from "axios";
import { http } from "../api";
import type { User } from "../routes/models/User";
const controller = 'users'

debugger

 export async function Post(item: User): Promise<User> {
     debugger
    const { data } = await http.post<User, AxiosResponse>(`${controller}`, item);
    return data;
 }
