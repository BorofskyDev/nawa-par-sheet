export const dataHelper = (data) => {
    return data.map(item => {
        const expirationDate = calculateExpirationDate(item.shelfLife)
        return {
            ...item,
            expirationDate
        }
    })
}
const calculateExpirationDate = (shelfLife) => {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + shelfLife)
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const year = String(currentDate.getFullYear()).slice(-2)
    return `${month}-${day}-${year}`
}