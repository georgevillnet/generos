const API_URL_CONTACTS = "https://localhost:7250/api/"

export const getGeneros = () => {

    return fetch((API_URL_GENEROS + "Get"))
        .then(res => res.json())
        .catch((error) => {
            console.error('Error GET', error);
            throw error;
        });
};

export const addGeneros = (nombreGenero, urlImagen) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(nombreGenero, urlImagen)
    }
    return fetch((API_URL_GENEROS + "Post"), options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error POST', error);
            throw error;
        });
};

export const deleteGenero = (id) => {
    const options = {
        method: 'DELETE'
    }
    return fetch((API_URL_GENEROS + "Delete/" + id), options)
        .catch((error) => {
            console.error('Error DELETE ', error);
            throw error;
        });
};

export const updateGenero = (id, genero) => {

    const options = {
        method: 'PUT',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(genero)
        // body: JSON.stringify({ id, nombreGenero, urlImagen })
    }

    return fetch((API_URL_GENEROS + "Put/" + id), options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error PUT', error);
            throw error;
        });
};