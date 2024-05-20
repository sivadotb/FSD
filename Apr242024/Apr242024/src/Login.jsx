import {Link} from 'react-router-dom';
function Login(){
    return(
        <form>
            <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
            </div>

            
            <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
            </div>

            
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                
                
                </div>

                <div className="col">
                
                <Link to="/forgot-password">Forgot password?</Link>
                </div>
            </div>
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
            <div className="text-center">
                <p>Not a member? <Link to="/register">Register</Link></p>
            </div>
        </form>
    )
}

export default Login