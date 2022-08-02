import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteUser, useFetch } from '../../utils/functions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';





const Contacts = ({editUser}) => {
  const {isLoading, contactList} = useFetch()
  return (
    <div>
      <h2 className='contact-header'> Contacts</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Delete</TableCell>
            <TableCell align="left">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { // /* Bilgiler gelmediği durumda Loading yazısı görünsün */
          isLoading ? (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
            <TableCell colSpan={5} align="center">Loading</TableCell>             
          </TableRow>
          ): // Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı
          contactList?.length === 0 ? (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
                  <TableCell colSpan={5} align="center">NO RESULT FOUND</TableCell>             
                </TableRow>
          ): 
           // Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın
          (
            contactList?.map((item,index) =>(
              <TableRow key={index}>
              <TableCell textAlign="center">{item.username.toUpperCase()}</TableCell>
              <TableCell textAlign="center">{item.phone}</TableCell>
              <TableCell textAlign="center">{item.gender}</TableCell>
              <TableCell textAlign="center" onClick={()=> DeleteUser(item.id)}>
                <DeleteIcon/>
              </TableCell>
              <TableCell textAlign="center" onClick={() => editUser(item.id, item.username,item.phone,item.gender)}><EditIcon/></TableCell>
              
            </TableRow>
            ))
          )

          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}
export default Contacts