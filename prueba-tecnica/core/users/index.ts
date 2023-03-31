import apiFetch from "../core"

const urBase = "https://erp-api-dev-app.azurewebsites.net/akralogic/erp/api/"

const api = {
    getAllUsers: async (token:string)=>{
        try {
            return await apiFetch({
                url:urBase,
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