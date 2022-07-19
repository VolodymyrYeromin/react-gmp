import constants from "./constants";

export const sortings = {};

for (const key of constants.sorting) {
    sortings[key.value.toUpperCase()] = key.value;
}
