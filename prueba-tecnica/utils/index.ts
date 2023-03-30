function toFormData(params:any) {
    let formBody:any = [];
    for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody
}

export {
    toFormData
}