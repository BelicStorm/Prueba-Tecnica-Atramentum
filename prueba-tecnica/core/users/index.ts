import apiFetch from "../core"

const urlBase = process.env.URL_BASE;
const api = {
    getAllUsers: async (token = "empty") => {
        try {
            return await apiFetch({
                url: `${urlBase}customers/`,
                contentType: "application/json",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (error) {
            return error
        }
    },
    getUserById: async (token: string, userId: string) => {
        try {
            return await apiFetch({
                url: `${urlBase}customers/${userId}`,
                contentType: "application/json",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (error) {
            return error
        }
    },
    putUserById: async (token: string, userId: string, updateData: any) => {
        console.log([updateData, userId, token], "hola");
        try {
            const dataClone = JSON.stringify(updateData)
            
            await apiFetch({
                url: `${urlBase}customers/${userId}`,
                contentType: "application/json",
                method: "PUT",
                params: dataClone,
                headers: { Authorization: `Bearer ${token}` }
            })
            return {error:false, result:"done"}
        } catch (error) {
            return {error:true, result:"", errMsg:error}
        }
    }
}

export default api