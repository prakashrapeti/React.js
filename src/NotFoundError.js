import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundError = () => {
    return ( 
       <div className="not-found">
        <h2>Soory!</h2>
        <p>That page is not found</p>
        <Link to='/' className="Errorhome">Back to Homepage</Link>
       </div> 
     );
}
 
export default NotFoundError;