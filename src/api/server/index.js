
const api_url = "/api/v1"

export default {
    async fetchMenu() {
        let resp = await fetch(api_url+"/products/")
        let data = await resp.json()
        return data
    }
}