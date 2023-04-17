import Api from "../../../../axios-admin";
import { callLoader } from "../../../../common/actions/app";

let ACTION_DASHBOARD_VIEW = {
    type: 'DASHBOARD_VIEW',
    payload: {
        vehicles: [],
    },
};

let callDashboardViewGet = (loader = true) => (dispatch) => {
    if (loader) {
        dispatch(callLoader(loader))
    }
    Api.get('/dashboard').then((data) => {
        if (loader) {
            dispatch(callLoader(false))
        }
        if (!data)
            return

        ACTION_DASHBOARD_VIEW.payload.vehicles = data.vehicles
        dispatch(ACTION_DASHBOARD_VIEW)
    })
}


export { callDashboardViewGet, ACTION_DASHBOARD_VIEW }