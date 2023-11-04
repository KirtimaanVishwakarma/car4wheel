export const formatCurrency = (amount) => {
  return amount?.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    // style: 'currency',
    // currency: 'INR',
  });
};

export const capitalize = (input) => {
  // Split the input string by spaces and underscores
  const words = input.split(/[_\s]+/);

  // Capitalize the first letter of each word
  const formattedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return '';
  });

  // Join the words back together with a space as the separator
  return formattedWords.join(' ');
};

export const attachParams = (baseUrl, params) => {
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();
  return url.href;
};

export const debounce = (func) => {
  let timer= null;
  return (...args) => {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func?.apply(context, args);
    }, 500);
  };
};

export const getTrimmedData = (obj) => {
  if (obj && typeof obj === 'object') {
    Object.keys(obj).map((key) => {
      if (typeof obj[key] === 'object') {
        getTrimmedData(obj[key]);
      } else if (typeof obj[key] === 'string') {
        obj[key] = obj[key].trim();
      }
    });
  }
  return obj;
};

export const disableField = (form, disable, field) => {
  return form.map((obj) => {
    if (obj.id === field) {
      return { ...obj, disable };
    }
    return obj;
  });
};

export const getValueAndLabel = (columnData) => {
  return columnData
    ?.filter((column) => column?.show !== undefined)
    .map((column) => {
      return {
        value: column.accessor,
        label: column.Header,
      };
    });
};

export const getHiddenColumnId = (columnData) => {
  return columnData
    .filter((column) => ('show' in column ? !column.show : null))
    .map((column) => column.accessor);
};


export function getDateIntoMS(date) {
  const [day, month, year] = date.split('-');

  // Create a new Date object using the parsed values
  const myDate = new Date(`${year}-${month}-${day}`);

  // Convert the date to milliseconds
  const milliseconds = myDate.getTime();
  return milliseconds;
}



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