import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksActions } from '../../redux/actions'
import Result from './result';
import SearchBar from '../../components/SearchBar'
function BooksList() {
    const dispatch = useDispatch()
    const { page, itemsPerPage } = useSelector((state) => state.booksReducer);
    useEffect(() => { dispatch(getBooksActions(page, itemsPerPage)) }, [page, itemsPerPage, dispatch])
    return (<><SearchBar/><Result/></>)
}
export default BooksList;