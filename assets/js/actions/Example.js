export const INCREMENT = 'INCREMENT';
export const increment = () => {
    return {
        type: INCREMENT,
        payload: true
    }
}

export const ADD_HIGH_FIVES = 'ADD_HIGH_FIVES';
export const addHighFives = (inc) => {
    return {
        type: ADD_HIGH_FIVES,
        payload: inc
    }
}

export const SUBTRACT_HIGH_FIVES = 'SUBTRACT_HIGH_FIVES';
export const subtractHighFives = (inc) => {
    return {
        type: SUBTRACT_HIGH_FIVES,
        payload: inc
    }
}