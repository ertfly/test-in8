import reportWebVitals from './reportWebVitals';
import GoogleMap from './common/containers/GoogleMaps'

window.google = GoogleMap().then(_ => { });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
