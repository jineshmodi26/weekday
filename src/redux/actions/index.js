import {constants} from "../constants/index"

const actions = {
    setJobs: (payload) => {
        return { type: constants.SET_JOBS, payload: payload }
    },
    setFilters: (payload) => {
        return { type: constants.SET_FILTERS, payload: payload }
    }
}

export default actions