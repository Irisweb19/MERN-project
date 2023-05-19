import './datatbale.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import { Link } from "react-router-dom"
import { useState } from 'react';

const Datatable = () => {

  const [data, SetData] = useState(userRows)

  const handleDelete = (id) => {
    SetData(data.filter(item=> item.id !== id))
  }

    const actionColumn = [
        { field: "action", headerName: "Action", width: 200,
            renderCell: (params) =>{
                return(
                    <div className='cellAction'>
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
    }
    ]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Add New
                    <Link to="/users/new" className='link'>
                      Add New
                    </Link>
        </div>
        <DataGrid 
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable