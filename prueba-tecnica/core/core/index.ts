

interface apiFetchProps {
    url:string,
    method: "GET"| "POST" | "PUT" | "DELETE",
    contentType: "application/json" | 'application/x-www-form-urlencoded'
    params?:any,
    headers?: any
}

const apiFetch = async ({url, params, method, contentType, headers={}}:apiFetchProps)=>{
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": contentType,
          ...headers
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(params), // body data type must match "Content-Type" header
      });
      return response.json(); 
}

export default apiFetch