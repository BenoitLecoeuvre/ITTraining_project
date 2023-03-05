import axios from 'axios'

const __BASE_URL = 'http://localhost:3000/api';

const __HEADERS = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
}

// ###
// # FORMATEURS
// ##


// GET
export const getFormateurApi = (async () => {
    return await axios(__BASE_URL + '/admin', {
        method: 'get',
        headers:__HEADERS
    })
})


// POST 
export const postFormateurApi = (async (formateur) => {
    let bodyFormData = new FormData();
    bodyFormData.append('email', formateur.email);
    bodyFormData.append('firm', formateur.firm);
    bodyFormData.append('username', formateur.username);
    bodyFormData.append('password', formateur.password);

    return await axios({
        method:'post',
        url: __BASE_URL + "/admin",
        data: bodyFormData,
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});


// PUT
export const putFormateurApi = (async (formateur) => {
    let bodyFormData = new FormData();
    bodyFormData.append('id', parseInt(formateur.id));
    bodyFormData.append('email', formateur.email);
    bodyFormData.append('firm', formateur.firm);
    bodyFormData.append('username', formateur.username);
    bodyFormData.append('password', formateur.password);

    return await axios({
        method:'put',
        url: __BASE_URL + "/admin" + formateur.id,
        data: bodyFormData,
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })

});


// DELETE
export const deleteFormateurApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/admin/" + id,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
})