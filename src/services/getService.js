

export const getServices = async () => {
    const resp = await fetch('http://localhost:3000/services/api/get-all')
    const data = await resp.json()
    return data
}
export const getServiceDeatils = async (id) => {
    const resp = await fetch(`http://localhost:3000/services/api/${id}`)
    const data = await resp.json()
    return data
}