const API_URL_CONTACTS = "https://earlytealsled0.conveyor.cloud/api/"

export const getGeneros = () => {

    return fetch((API_URL_CONTACTS + "Get"))
        .then(res => res.json())
        .catch((error) => {
            console.error('Error GET', error);
            throw error;
        });
};

export const addGeneros = (contact) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    }
    return fetch((API_URL_CONTACTS + "Post"), options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error POST', error);
            throw error;
        });
};