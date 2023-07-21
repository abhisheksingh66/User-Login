import { useState } from 'react'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'
function Home() {
    const [inpval,setInpVal] = useState({
        name:'',
        email:'',
        date:'',
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
       const{name,email,date ,password}=inpval;

       if(name===''){
        alert('name feild is requierd')
       }
       else if(email===''){
        alert('email feild is requierd')
       }else if(!email.includes('@')){
        alert('plz enter valid email address')
       }
       else if(date===''){
        alert('date feild is requierd')
       }
       else if(password===''){
        alert('password feild is requierd')
       }
       else if(password.length<5){
        alert('passwaord length greater than 5')
       }
       else{
        console.log('Data added successfully!')
        localStorage.setItem('useryoutube',JSON.stringify([...data,inpval]))
       }
    }
    return (
        <div>
            <div className="container mt-3">
                <section className='d-flex  justify-content-between'>
                    <div className="left-data mt-3 p-3" style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>Sign up</h3>
                        <Form>
                            
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" name='date' onChange={getdata} />
                            </Form.Group>

                                
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                           
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{background:"rgb(67,185,127"}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already have an account <span> <NavLink to='/login'> SignIn</NavLink></span></p>
                    </div>
                   <Sign_img/>
                </section>
            </div>
        </div>
    )
}

export default Home
