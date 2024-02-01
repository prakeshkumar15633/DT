import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import { compareSync } from "bcryptjs";

function Login() {
    let navigate=useNavigate()

    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //handle form submit
    function handleFormSubmit(UserCredentailsObject) {
        fetch(`http://localhost:4000/users?username=${UserCredentailsObject.username}`,
            {method:"GET"}
        )
        .then(res=>res.json())
        .then((userObjArray)=>{
            if(userObjArray.length===0)
                alert("Invalid Username")
            else{
                let result=compareSync(UserCredentailsObject.password,userObjArray[0].password)
                // if passwords are matched

                if(result){
                    //Navigate to user dashboard by passing userObj as State
                    localStorage.setItem("user",JSON.stringify(userObjArray[0]))
                    navigate(`/profile/${userObjArray[0].username}`)
                }
                else
                    alert("Invalid Password")
            }
        })
    }

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3 col-sm-8 border p-4 bg-light">
                <h1 className="display-3 fs-1 text-center mb-3">Login Form</h1>
                <form className="mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                    {/* Username */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-control shadow-sm"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        {errors.username?.type === "required" && (
                            <p className="text-danger">Username is required</p>
                        )}
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control shadow-sm"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-danger">Password is required</p>
                        )}
                    </div>

                    <button className="btn btn-primary d-block mx-auto mb-3">Login</button>
                </form>
                <p className="lead text-center">
                    New User? <Link to='/register' className="fs-4 ps-2">Register</Link>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Login;