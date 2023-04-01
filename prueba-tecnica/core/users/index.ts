import apiFetch from "../core"

const urlBase = process.env.URL_BASE;
const api = {
    getAllUsers: async (token="empty")=>{
        try {
            return await apiFetch({
                url:`${urlBase}customers/`,
                contentType:"application/json",
                method:"GET",
                headers: {Authorization:`Bearer ${token}`}
            })
        } catch (error) {
            return error
        }
    },
    getUserById: async (token:string,userId:string)=>{
        try {
            return await apiFetch({
                url:`${urlBase}/customers/${userId}`,
                contentType:"application/json",
                method:"GET",
                headers: {Authorization:`Bearer ${token}`}
            })
        } catch (error) {
            return error
        }
    }
}

export default api