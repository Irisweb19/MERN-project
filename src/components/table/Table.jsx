import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 

const List = () => {
    const rows = [
        {
            id: 83832,
            Product: "Five Star Hotel",
            img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            custormer: "Yunus Ade",
            date: "2 May",
            amount: 490,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 92302,
            Product: "Best Hotel",
            img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
            custormer: "Mustapha Dayo",
            date: "5 March",
            amount: 382,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 83832,
            Product: "Awesome Hotel",
            img: "https://images.pexels.com/photos/16104977/pexels-photo-16104977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=699.825&fit=crop&h=1133.05",
            custormer: "Wale Regal",
            date: "9 Jan",
            amount: 932,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 83832,
            Product: "Cool Hotel",
            img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
            custormer: "Yunus Ade",
            date: "2 May",
            amount: 483,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id: 83832,
            Product: "Highlife Hotel",
            img: "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1600",
            custormer: "Yunus Ade",
            date: "5 May",
            amount: 490,
            method: "Pay on Delivery",
            status: "Pending"
        },
    ]
  return (
     <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Hotel</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.Product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.custormer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className={`status ${row.status}`}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List