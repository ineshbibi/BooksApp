import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooksActions, setBooksPagination, setBooksQuery } from '../../redux/actions';
import Result from './result'
import TablePagination from '@mui/material/TablePagination';
import SearchBar from '../../components/SearchBar'
import Grid from '@mui/material/Grid';
class Books extends Component {
    componentWillMount() {
        this.props.getBooks(this.props.page, this.props.itemsPerPage, this.props.query)
    }
 handleChangePage = (event, newPage) => {
     this.props.setBooksPagination(newPage, this.props.itemsPerPage, '');
     this.props.getBooks(newPage, this.props.itemsPerPage, this.props.query)
  };

  handleChangeRowsPerPage = event => {
      this.props.setBooksPagination(this.props.page, event.target.value);
      this.props.getBooks(this.props.page, event.target.value, this.props.query)
  };
  handleSearch = (query) => {
      this.props.onSearch(query)
      this.props.getBooks(0, 10, query)
  };
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs ={12}>
                        <SearchBar onSearch={this.handleSearch}/>
                    </Grid>
                    <Grid item xs ={12}>
                    {this.props.books?.length > 0 && <Result />}
                    </Grid>
                    <Grid item xs ={12}>
                    <TablePagination
                    component="div"
                    count={this.props.booksLength}
                    page={this.props.page}
                    onPageChange={this.handleChangePage}
                    rowsPerPage={this.props.itemsPerPage}
                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                />
                </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.booksReducer.books,
        page: state.booksReducer.page,
        booksLength: state.booksReducer.booksLength,
        itemsPerPage: state.booksReducer.itemsPerPage,
        isLoading: state.booksReducer.isLoading,
        query: state.booksReducer.query
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBooks: (page, itemsPerPage, query) => {
            dispatch(getBooksActions(page, itemsPerPage, query));
        },
        setBooksPagination: (page, itemsPerPage) => {
            dispatch(setBooksPagination(page, itemsPerPage))
        },
        onSearch: (query) => {
            dispatch(setBooksQuery(query))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Books);