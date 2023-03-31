import apiFetch from "../core"

const urBase = process.env.URL_BASE ?? "";

const api = {
    getAllUsers: async (token:string)=>{
        try {
            return await apiFetch({
                url:`${urBase}/customers/`,
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
                url:`${urBase}/customers/${userId}`,
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