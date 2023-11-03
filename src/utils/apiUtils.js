



const FetchApi = async (url,method, headers, data) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
    };
  
    const response = await fetch(url, options);
  
    const result = await response.json();
  
    return result;
  };
  
  export default FetchApi;