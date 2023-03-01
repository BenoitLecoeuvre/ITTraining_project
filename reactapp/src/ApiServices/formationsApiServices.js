//import axios from 'axios'

//const __BASE_URL = 'http://localhost:3000/api';

//const __HEADERS = {
//    'Accept' : 'application/json',
//    'Content-Type': 'application/json'
//}


//// ###
//// # FORMATIONS
//// ###


//// GET
//export const getFormationList = (async () => {
//    return await axios(__BASE_URL + '/formations', {
//        method: 'get',
//        headers:__HEADERS
//    })
//})


//// GET
//export const getFormationApiAdmin = (async () => {
//    return await axios(__BASE_URL + '/admin', {
//        method: 'get',
//        headers:__HEADERS
//    })
//})


//// POST
//export const postFormationApi = (async (formation) => {
//    let bodyFormData = new FormData();
//    // bodyFormData.append('id', formation.id);
//    bodyFormData.append('formationName', formation.formationName);
//    bodyFormData.append('category', formation.category);
//    bodyFormData.append('subCategory', formation.subCategory);
//    bodyFormData.append('description', formation.description);
//    bodyFormData.append('descriptionDetail', formation.descriptionDetail);
//    bodyFormData.append('duree', formation.duree);
//    bodyFormData.append('price', formation.price);
//    bodyFormData.append('difficulty', formation.difficulty);
//    bodyFormData.append('lieux', formation.lieux);
//    bodyFormData.append('dates', formation.dates);
//    bodyFormData.append('logo', formation.logo);
//    // bodyFormData.append('start', formation.start);
//    // bodyFormData.append('end', formation.end);
//    // bodyFormData.append('status', formation.status);
//    // bodyFormData.append('nbrinscrit', formation.nbrinscrit);

//    return await axios({
//        method:'post',
//        url: __BASE_URL + "/admin",
//        data: bodyFormData,
//        headers: {
//            "Content-Type" : "multipart/form-data"
//        }
//    }).catch(err => {
//        alert(err);
//        console.log(err)
//    })

//});


//// PUT
//export const putFormationApi = (async (formation) => {
//    let bodyFormData = new FormData();
//    // bodyFormData.append('id', formation.id);
//    bodyFormData.append('formationName', formation.formationName);
//    bodyFormData.append('category', formation.category);
//    bodyFormData.append('subCategory', formation.subCategory);
//    bodyFormData.append('description', formation.description);
//    bodyFormData.append('descriptionDetail', formation.descriptionDetail);
//    bodyFormData.append('duree', formation.duree);
//    bodyFormData.append('price', formation.price);
//    bodyFormData.append('difficulty', formation.difficulty);
//    bodyFormData.append('lieux', formation.lieux);
//    bodyFormData.append('dates', formation.dates);
//    bodyFormData.append('logo', formation.logo);
//    // bodyFormData.append('start', formation.start);
//    // bodyFormData.append('end', formation.end);
//    // bodyFormData.append('status', formation.status);
//    // bodyFormData.append('nbrinscrit', formation.nbrinscrit);

//    return await axios({
//        method:'put',
//        url: __BASE_URL + "/admin",
//        data: bodyFormData,
//        headers: {
//            "Content-Type" : "multipart/form-data"
//        }
//    }).catch(err => {
//        alert(err);
//        console.log(err)
//    })

//});


//// DELETE
//export const deleteFormationApi = (async (id) => {
//    return await axios({
//        method: "delete",
//        url: __BASE_URL + "/admin/" + id,
//        headers: __HEADERS
//    }).catch(err => {
//        alert(err);
//        console.log(err)
//    })
//})






