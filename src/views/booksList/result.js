import React from "react";
import { useSelector  } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Result() {
  const { books,booksLength, isLoading } = useSelector(state => state.booksReducer);
  const booksList = isLoading ? (
      <TableRow>
        <TableCell style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Is Loading ...
        </TableCell>
      </TableRow>) :
    books.map(book => {
      return(<TableRow
              key={book.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{book.id}</TableCell>
              <TableCell align="center">{book.book_author[0]}</TableCell>
              <TableCell align="center">{book.book_title}</TableCell>
              <TableCell align="center">{book.book_publication_year}</TableCell>
              <TableCell align="center">{book.book_publication_country}</TableCell>
              <TableCell align="center">{book.book_publication_city}</TableCell>
              <TableCell align="center">{book.book_pages}</TableCell>
            </TableRow>);
    });
  return (
    <div className="cards"><TableContainer component={Paper}>
      <span data-testid="booksNb">Books Numbers: </span>
      {<span>{booksLength}</span>}
      <Table sx={{ minWidth: 650 }} aria-label="simple table" title='booksTitle'>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Publication Year</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Nb Pages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booksList}
        </TableBody>
      </Table>
    </TableContainer>
    </div>)
}

export default Result;
