
let STATE_ARRAY = [];

export const pushToStateArray = (value) =>{
    STATE_ARRAY.push(value);
}

export const getStateArray = () =>{
    return STATE_ARRAY;
}

export const emptyStateArray = () => {
    STATE_ARRAY = [];
}

    