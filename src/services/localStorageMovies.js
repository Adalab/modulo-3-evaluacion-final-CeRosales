const get = (key, defaultData) => {
    const data = localStorage.getItem(key);
    if (data === null) {
        return defaultData;
    }else {
        return JSON.parse(data);
    }
};

//guardamos una propiedad en el local
const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


//borramos propiedad del local
const remove = (key) => {
    localStorage.removeItem(key);
};

// creamos objeto a exportar (temporal)
const objToExport = {
    get: get,
    set: set,
    remove: remove,
};

export default objToExport;