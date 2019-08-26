import * as React from 'react';
import {Link} from 'react-router-dom'
import { Store } from '../../store';
import { toggleFavAction, fetchHomeAction } from './actions'

export default function Home() {
  const { state, dispatch }: any = React.useContext(Store);

  React.useEffect(() => {
    fetchHomeAction(dispatch)
  }, [])
  
  return (
    <>
      <div>Hi Im Home</div>
      <Link to="/dashboard">Dashboard</Link>
    </>
  )
}