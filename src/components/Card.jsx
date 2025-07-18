import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Card = ({name, id}) => {

    const {store,dispatch}=useGlobalReducer()

    function addFavs() {
        console.log(name,id);
        dispatch({type:'add_favs',payload:{name:name,id:id}})
        // dispatch({type:"la accion",payload:"informacion a actualizar"})
        
    }


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" id={id}>{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link to={"/details/"+id} className="btn btn-primary">Go somewhere</Link>
                <button className="btn btn-warning" onClick={addFavs}>like</button>
            </div>
        </div>
    );
}; 