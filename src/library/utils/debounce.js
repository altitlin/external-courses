const debounce = (func, delay) => {
    let timeout = null;    
    
    return function(event) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.call(null, event);
        }, delay);
    };
};