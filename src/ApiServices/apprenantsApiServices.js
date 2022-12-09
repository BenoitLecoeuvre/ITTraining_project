import axios from 'axios'

const __BASE_URL = 'http://localhost:3000/api';

const __HEADERS = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
}

// ###
// # APPRENNANTS
// ##


// GET
export const getApprenantApi = (async () => {
    return await axios(__BASE_URL + '/admin', {
        method: 'get',
        headers:__HEADERS
    })
})


// POST 
export const postApprenantApi = (async (apprennant) => {
    let bodyFormData = new FormData();
    bodyFormData.append('email', apprennant.email);
    bodyFormData.append('firm', apprennant.firm);
    bodyFormData.append('username', apprennant.username);
    bodyFormData.append('password', apprennant.password);

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
export const putApprenantApi = (async (apprennant) => {
    let bodyFormData = new FormData();
    bodyFormData.append('id', parseInt(apprennant.id));
    bodyFormData.append('email', apprennant.email);
    bodyFormData.append('firm', apprennant.firm);
    bodyFormData.append('username', apprennant.username);
    bodyFormData.append('password', apprennant.password);

    return await axios({
        method:'put',
        url: __BASE_URL + "/admin" + apprennant.id,
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
export const deleteApprenantApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/admin/" + id,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
})