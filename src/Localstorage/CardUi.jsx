import { FaPencil } from "react-icons/fa6"
import { MdDelete } from "react-icons/md"

const CardUi = ({category,name,trash,update,author,description}) => {
  return (
<>
    <div className="card shadow ">
        <div className="card-body ">
        <h2>{name}</h2>
        <h4>{category}</h4>
        <h3>{author}</h3>
        <h1>{description}</h1>
        <button className="btn btn-outline-danger" onClick={trash}><MdDelete/></button>
        <button className="btn btn-outline-warning mx-3" onClick={update}><FaPencil/></button>

    </div>
    </div>
</> 
    )
}

export default CardUi