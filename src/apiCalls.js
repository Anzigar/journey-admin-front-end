import axios from "axios";

export const sendToBackendPost = async (link, data) => {
    let result;
    result = await axios.post(link, data, {
        // headers: {
        //     'content-type': 'text/json',
        // },
        withCredentials: true,
    }).catch((e) => {
        console.log(e)
        result = {
            state: 'error',
            data: 'Network error',
        };
        return result;
    });
    if (typeof (result)  === 'object') {
        return result.data;
    }
    return result;
}

export const sendToBackendPostImage = async (link, data) => {
    let result;
    result = await axios.post(link, data, {
        withCredentials: true,
    }).catch((e) => {
        console.log(e)
        result = {
            state: 'error',
            data: 'Network error',
        };
        return result;
    });
    if (typeof (result)  === 'object') {
        return result.data;
    }
    return result;
}

export const sendToBackendGet = async (link) => {
    let result;
    result = await axios.get(link, {
        withCredentials: true,
    }).catch((e) => {
        console.log(e)
        result = {
            state: 'error',
            data: 'Network error',
        };
        return result;
    });
    if (typeof (result)  === 'object') {
        return result.data;
    }
    return result;
}
