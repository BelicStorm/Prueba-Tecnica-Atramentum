import apiFetch from "../core"

const api = {
    getDito: async ()=>{
        try {
            return await apiFetch({
                url:"https://pokeapi.co/api/v2/pokemon/ditto",
                contentType:"application/json",
                method:"GET",
            })
        } catch (error) {
            return error
        }
    }
}

export default api