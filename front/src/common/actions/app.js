import Api from '../../axios-admin'

let ACTION_APP_LOADER = {
    type: 'LOADER',
    payload: true,
};

let ACTION_APP_SESSION = {
    type: 'SESSION',
    payload: {
        logged: false,
        name: ''
    },
};

let callTokenPost = () => async (dispatch) => {
    dispatch(callLoader(true))
    await Api.post('/token', {}).then((data) => {
        if (!data || !data.token)
            return

        localStorage.setItem('token', data.token)

        dispatch(callAuthGet())
    })
    
}

let callAuthGet = () => async (dispatch) => {
    dispatch(callLoader(true))
    await Api.get('/auth').then((data) => {
        dispatch(callLoader(false))
        if (!data)
            return

        ACTION_APP_SESSION.payload.logged = data.logged
        ACTION_APP_SESSION.payload.name = data.name
        dispatch(ACTION_APP_SESSION)
    })
}

let callLoader = (show = false) => (dispatch) => {
    ACTION_APP_LOADER.payload = show
    dispatch(ACTION_APP_LOADER)
}

let callAuthDelete = () => (dispatch) => {
    dispatch(callLoader(true))
    Api.delete('/auth').then((data) => {
        dispatch(callLoader(false))
        if (!data)
            return

        ACTION_APP_SESSION.payload.logged = false
        ACTION_APP_SESSION.payload.name = ''
        dispatch(ACTION_APP_SESSION)
        window.navigate('/account/login')
    })
}


export { callTokenPost, callAuthGet, callLoader, callAuthDelete, ACTION_APP_LOADER, ACTION_APP_SESSION }