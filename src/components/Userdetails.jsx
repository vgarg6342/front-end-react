import React, {useState} from 'react'

function UserDetails(){
  const[college, setCollege] = useState('')
  const[age, setAge] = useState('')
  const[gender, setGender] = useState('')

  const collegeHandler =(e) =>{
    setCollege(e.target.value)
  }
  const ageHandler =(e) =>{
    setAge(e.target.value)
  }
  const genderHandler =(e) =>{
    setGender(e.target.value)
  }
  
  const updateUser = (e)=>{
    e.preventDefault()
    console.log(college)
    console.log(age)
    console.log(gender)
  }


  return(
    <form onSubmit = {updateUser}>
      <input type = 'text' name= 'name' value = {college} onChange = {collegeHandler}/>
      <input type = 'text' name= 'age' value = {age} onChange = {ageHandler}/>
      <input type = 'text' name= 'gender' value = {gender} onChange = {genderHandler}/>
      <button>submit</button>
    </form>
  )
}

export default UserDetails

