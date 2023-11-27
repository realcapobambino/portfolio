import HomeRouter from './Modules/Home/Router'
import BlogRouter from './Modules/Blog/Router'
import AdminRouter from './Modules/Admin/Router'



export default [
    ...HomeRouter,
    ...BlogRouter,
    ...AdminRouter
]