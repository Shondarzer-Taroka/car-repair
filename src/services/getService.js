

export const getServices = async () => {
try {
    const resp = await fetch('http://localhost:3000/services/api/get-all')
    const data = await resp.json()
    return data
} catch (error) {
    console.log(error);
    
    return []
}
}
export const getServiceDeatils = async (id) => {
try {
    const resp = await fetch(`http://localhost:3000/services/api/${id}`)
    const data = await resp.json()
    return data
} catch (error) {
    console.log(error);
    return {}
}
}