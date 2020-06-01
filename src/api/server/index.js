
const api_url = "/api/v1"

export default {
    async fetchMenu() {
        let resp = await fetch(api_url + "/products/")
        let data = await resp.json()
        return data
    },
    async postOrderRequest(orderRequestBody) {
        const RequestBody = JSON.stringify(orderRequestBody)
        let resp = await fetch(api_url + "/orders/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: RequestBody
        })
        const data = await resp.json()
        return data
    },
    async postNewUserRequest(newUser) {
        const RequestBody = JSON.stringify(newUser)
        let resp = await fetch(api_url + "/users/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: RequestBody
        })
        const data = await resp.json()
        return data
    },
    async fetchUserProfileById(userId) {
        console.log(userId)
        let resp = await fetch(api_url + "/users/" + userId)
        let data = await resp.json()
        return data
    },
    }
