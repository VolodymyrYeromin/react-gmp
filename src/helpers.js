import constants from "./constants";

export const sortings = () => {
    const sortingsObject = {}

    for (const key of constants.sorting) {
        sortingsObject[key.value.toUpperCase()] = key.value;
    }

    return sortingsObject;
};


