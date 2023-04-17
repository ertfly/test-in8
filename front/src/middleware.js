import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { callTokenPost, callAuthGet } from './common/actions/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './common/containers/Loader'
import { useEffect, useState } from 'react';
import { subRoutes } from './routes';

let Middleware = ({ loader, header, forceAuth, children, session, configMethods }) => {
    const {
        callTokenPost,
        callAuthGet
    } = configMethods
    const [first, setFirst] = useState(true)

    useEffect(() => {
        if (first) {
            setFirst(false)
            if (!localStorage.getItem('token')) {
                callTokenPost()
            } else {
                callAuthGet()
            }
        }
    }, [first, setFirst, callTokenPost, callAuthGet])

    if (session.logged === null) {
        return (
            <>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <Loader show={loader} />
            </>

        )
    }
    if (session.logged === false && forceAuth === true) {
        return <Navigate to={'/account/login'} />
    }

    if (session.logged !== false && forceAuth === false) {
        return <Navigate to={'/'} />
    }

    if (header === null) {
        return (
            <>
                <Loader show={loader} />
                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                {children}
            </>
        )
    }

    return (
        <>
            <Loader show={loader} />
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            {header ?? null}
            <Routes>
                {subRoutes.map((a, ai) => <Route path={a.path} key={ai} element={<a.container />} />)}
            </Routes>
            {children}
        </>
    )
}

const mapStateToProps = ({ app }) => ({
    session: app.session,
    loader: app.loader
});

const mapDispatchToProps = (dispatch) => ({
    configMethods: bindActionCreators(
        {
            callTokenPost,
            callAuthGet
        },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Middleware)