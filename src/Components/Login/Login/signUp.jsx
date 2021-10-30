import React from 'react';
const SignUp = () => {
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
    }
    return (
        <form>
            <h4>SignUp</h4>
            <input onChange={handleChange} className="form-control" type="email" name="email" placeholder='Write Your Email Address' required />
            <br />
            <input onChange={handleChange} className="form-control" type="password" name="password" placeholder='password' required />
            <br />
            <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
    )
}
export default SignUp;