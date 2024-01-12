import axios from "axios";

export async function getShedules(search?: string) {
    try {
        console.log("env: ", process.env.BACKEND_URL)
        const apiurl = `${process.env.BACKEND_URL}/shedules` + (search ? `&search=${search}` : "")
        const data = await axios.get(apiurl)
        return data.data;
    } catch (error) {
        throw (error);
    }
}