import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import MainPage from '../Pages/MainPage/MainPage'
import IndexJSX from '../Sections/Vacancies'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="/vacancies" element={<IndexJSX />} />
                <Route path="*" element={<PageNotFound/>} />
            </Route>
        </Routes>
    )
}

export default Routing