import './hotel.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Hoteltable from '../../components/hoteltable/Hoteltable'

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Hoteltable/>
      </div>
      </div>
  )
}

export default List