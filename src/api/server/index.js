
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
        console.log(data)
        return data
    },
    async putNewUserToOrderRequest(userId, orderIdToAttch) {
        // const url = new URL(api_url + "/orders/" + orderIdToAttch)
        // const params = { user: userId }
        // url.search = new URLSearchParams(params).toString();


        // console.log(url)

        const resp = await fetch(api_url + "/orders/" + orderIdToAttch + "?user=" + userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        return data
    },
}
