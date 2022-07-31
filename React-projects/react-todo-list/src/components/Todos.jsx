import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Todos = (props) => {
  console.log(props);
  return (
    <div className='d-flex justify-content-between align-items-center my-2'>
      <li className='list-group-item fs-5'>
        {props.item}
      </li>
      <div className='d-flex gap-3'>
        <button 
        className='btn btn-outline-danger fw-bold px-3'
        onClick={() => props.handleDelete(props.id)}
        >
        <AiFillDelete size={22} />
        </button>
        <button 
        className='btn btn-outline-warning fw-bold px-3'
        onClick={() => props.handleEdit(props.id)}
        >
        <FaEdit size={20} />
        </button>
      </div>

    </div>
  )
}

export default Todos