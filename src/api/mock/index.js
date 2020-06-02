import menu from '@/api/mock/data/menu'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchMenu () {
    return fetch(menu.menu, 1000) // wait 1s before returning posts
  }
}

