import React from "react"
import Contact from '../component/About/Contact';
import About from '../component/About/About';
import Home from '../component/Content/Home/Home';

const routes = [{
    path: '/',
    exact: true,
    main: () => <Home />
},
{
    path: '/AboutUs',
    exact: true,
    main: ({ history }) => <About history={history} />
},
{
    path: '/screenDetail',
    exact: true,
    main: ({ history }) => <Contact history={history} />
},
{
    path: '/Admin',
    exact: true,
    main: ({ history }) => <List history={history} />
}
];
export default routes;