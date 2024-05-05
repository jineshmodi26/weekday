import { constants } from "../constants/index"

const initialState = {
    jobs: [],
    filters: {
        minExperience: 0,
        companyName: "",
        location: "",
        remote: "",
        techStack: "",
        role: "",
        minBasePay: 0
    }
}

const reducer =  (state=initialState, action) => {
    switch(action.type) {
        case constants.SET_JOBS:
            return {
                ...state,
                jobs: action.payload.jobs
            }
        case constants.SET_FILTERS:
            return {
                ...state,
                filters: action.payload.filters
            } 
        default:
            return state
    }
}

export default reducer