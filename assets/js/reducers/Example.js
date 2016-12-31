import * as ExampleActions from 'actions/Example'

let initialState = {
    tally: 0,
    highFives: 0
}

function Example(state = initialState, action) {
    switch (action.type) {
        
        case ExampleActions.INCREMENT:
            return {
                ...state,
                tally: state.tally + 1
            }

        case ExampleActions.ADD_HIGH_FIVES:
            return {
                ...state,
                highFives: state.highFives + action.payload
            }

        case ExampleActions.SUBTRACT_HIGH_FIVES:
            return {
                ...state,
                highFives: state.highFives - action.payload
            }

        default:
            return state

    }
}

export default Example