import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const history= useNavigate()   

    const [inpval,setInpVal] = useState({
        email:'',
        password:''
    })
    const [data,setData]=useState([])
    console.log(inpval)
    const getdata=(e)=>{
    // console.log(e.target.value)

    const {value,name}=e.target
    // console.log(value,name)

    setInpVal(()=>{
        return{
            ...inpval,
            [name]:value
        }
    })
}

    const addData=(e)=>{
       e.preventDefault()
       console.log(inpval)
       const{email ,password}=inpval;
       
       const getuserArr= localStorage.getItem('useryoutube')
       console.log(getuserArr)
       
        if(email===''){
        alert('email feild is requierd')
       }else if(!email.includes('@')){
        alert('plz enter valid email address')
       }
       else if(password===''){
        alert('password feild is requierd')
       }
       else if(password.length<5){
        alert('passwaord length greater than 5')
       }
       else{
        if(getuserArr && getuserArr.length){
            const userdata =JSON.parse(getuserArr)
            const userlogin=userdata.filter((el,k)=>{
                return el.email===email && el.password===password
            })
            if(userlogin.length===0){
       alert('Invailid Details')
            }
            else{
                console.log('user login suucess')
                localStorage.setItem('user_login',JSON.stringify(userlogin))
                history('/detail')
            }
        }
       }
    }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex  justify-content-between'>
                    <div className="left-data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>create your new account <span>SignUP</span></p>
                    </div>
                    <Sign_img />
                </section>
            </div></>
    )
}

export default Login
