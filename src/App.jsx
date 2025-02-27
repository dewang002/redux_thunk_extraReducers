import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './store/thunk/userThunk'

const App = () => {
  const { value, loading, error } = useSelector( state => state.user)
  const dispatch = useDispatch()  

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  if(loading)return "loading..."

  if(error)return error.message

  return (
    <div>
      {value?.map( elem => <h2>{elem.name}</h2> )}
    </div>
  )
}

export default App