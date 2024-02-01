import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { hashSync } from "bcryptjs";
// import './Register.css'
function Register() {

    let navigate = useNavigate()
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //handle form submit
    function handleFormSubmit(newUser) {
        //Hash password
        let hashedPassword = hashSync(newUser.password, 5)
        //replace plain password with hashed password
        newUser.password = hashedPassword



        // Make http post request to create user in api 
        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                if (res.status === 201) {
                    //navigate to login page
                    navigate('/login')
                }
            })
            .catch(err => console.log("Error in registration", err))
    }

    return (
        <div className="container mb-5">
            <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10 d-block mx-auto border p-4 bg-light">
            <h1 className="display-3 fs-1 text-center mb-3">
                Register Form
            </h1>
            <form
                className="w-100 row mx-auto ps-3 pe-3"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                {/* First Name */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="form-control shadow-sm"
                        {...register("firstName", {
                            required: true,
                            minLength: 4,
                            maxLength: 8,
                        })}
                    />
                    {/* validation error message of First Name */}
                    {errors.firstName?.type === "required" && (
                        <p className="text-danger">First Name is required</p>
                    )}
                    {errors.firstName?.type === "minLength" && (
                        <p className="text-danger">Min length should be 4</p>
                    )}
                    {errors.firstName?.type === "maxLength" && (
                        <p className="text-danger">Max length should be 8</p>
                    )}
                </div>
                {/* Last Name */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="lastName" className="form-label ">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="form-control shadow-sm"
                        {...register("lastName", {
                            required: true,
                            minLength: 4,
                            maxLength: 8,
                        })}
                    />
                    {/* validation error message of Last Name */}
                    {errors.lastName?.type === "required" && (
                        <p className="text-danger">Last Name is required</p>
                    )}
                    {errors.lastName?.type === "minLength" && (
                        <p className="text-danger">Min length should be 4</p>
                    )}
                    {errors.lastName?.type === "maxLength" && (
                        <p className="text-danger">Max length should be 8</p>
                    )}
                </div>

                {/* Date of birth */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="dob" className="form-label">
                        Date of birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        className="form-control shadow-sm"
                        {...register("dob", {
                            required: true,
                        })}
                    />
                    {/* validation error message of Date of birth */}
                    {errors.dob?.type === "required" && (
                        <p className="text-danger">Date of birth is required</p>
                    )}
                </div>
                {/* gender */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label>Gender</label>
                    {/* male */}
                    <div className="row mt-2 pt-1 ms-1">
                        <div className="form-check col-4">
                            <input type="radio" id="m" className="form-check-input shadow-sm" value="Male" {...register("gender", { required: true })} />
                            <label htmlFor="m" className="form-check-label">Male</label>
                        </div>
                        {/* female */}
                        <div className="form-check col-4">
                            <input type="radio" id="f" className="form-check-input shadow-sm" value="Female" {...register("gender", { required: true })} />
                            <label htmlFor="f" className="form-check-label">Female</label>
                        </div>

                    </div>
                    {errors.gender?.type === "required" && (
                        <p className="text-danger">Gender is required</p>
                    )}

                </div>

                {/* Email */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control shadow-sm"
                        {...register("email", { required: true })}
                    />
                    {/* validation error message of email */}
                    {errors.email?.type === "required" && (
                        <p className="text-danger">Email is required</p>
                    )}
                </div>
                {/* Phone number */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="phno" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phno"
                        className="form-control shadow-sm"
                        {...register("phno", {
                            required: true,
                            minLength: 10,
                            maxLength: 10,
                        })}
                    />
                    {/* validation error message of Phone number */}
                    {errors.phno?.type === "required" && (
                        <p className="text-danger">Phone number is required</p>
                    )}
                    {errors.phno?.type === "minLength" && (
                        <p className="text-danger">size must be 10</p>
                    )}
                    {errors.phno?.type === "maxLength" && (
                        <p className="text-danger">size must be 10</p>
                    )}

                </div>

                {/* Username */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control shadow-sm"
                        {...register("username", {
                            required: true,
                            minLength: 4,
                            maxLength: 10,
                        })}
                    />
                    {/* validation error message of Username */}
                    {errors.username?.type === "required" && (
                        <p className="text-danger">First Name is required</p>
                    )}
                    {errors.username?.type === "minLength" && (
                        <p className="text-danger">Min length should be 4</p>
                    )}
                    {errors.username?.type === "maxLength" && (
                        <p className="text-danger">Max length should be 10</p>
                    )}
                </div>
                {/* password */}
                <div className="mb-3 col-md-6 col-lg-6 col-sm-12">
                    <label htmlFor="password" className="form-label ">
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
                    {/* validation error message of Password*/}
                    {errors.password?.type === "required" && (
                        <p className="text-danger">Last Name is required</p>
                    )}

                </div>

                {/* state */}
                <div className="mb-3 col-12">
                    <label htmlFor="state">Select state</label>
                    <select id="state" className="form-select shadow-sm" {...register('state', { required: true })} defaultValue="">
                        <option value="" disabled>Choose a state</option>
                        <option value="Andhra pradesh">Andhra pradesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Keral</option>
                        <option value="Tamil nadu">Tamil nadu</option>
                        <option value="Telangana">Telangana</option>
                    </select>
                    {/* validation error message for state */}
                    {errors.state?.type === "required" && (
                        <p className="text-danger">Please select a state</p>
                    )}
                </div>


                <button className="btn btn-success col-sm-6 col-md-4 col-lg-3 d-block mx-auto mb-3">Register</button>

            </form>
            <p className="lead text-center">
                Already registered?
                <Link to='/login' className="fs-4 p-2">login</Link>
            </p>
        </div>
        </div>
    </div>
    );
}

export default Register;