import axios from "axios";
import { EmailShedulesProps } from "@/lib/type";

export async function getShedules(search?: string) {
    try {
        const apiurl = `${process.env.BACKEND_URL}/shedules` + (search ? `?search=${search}` : "")
        const data = await axios.get(apiurl)
        return data.data;
    } catch (error) {
        throw (error);
    }
}

export async function createShedule(values: EmailShedulesProps) {
    try {
        const apiurl = `${process.env.BACKEND_URL}/shedules`
        const data = await axios.post(apiurl, values)
        return data;
    } catch (error) {
        throw (error);
    }
}