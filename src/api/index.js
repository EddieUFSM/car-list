
export const getData = () => {
    return fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`, {
        method: 'GET',
        headers: {}
    }).then(response => {
        console.log(response)
        return response.json()
    })
        .catch(err => console.log(err))
}


export const getModelos = (id) => {
    return fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`, {
        method: 'GET',
        headers: {}
    }).then(response => {
        console.log(response)
        return response.json()
    })
        .catch(err => console.log(err))
}