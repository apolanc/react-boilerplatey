import * as React from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { toggleDashboardAction, fetchDashboardAction } from './actions'

export default function Dashboard() {
  const { state, dispatch }: any = React.useContext(Store);

  React.useEffect(() => {
    fetchDashboardAction(dispatch)
  }, [])
  
  return (
    <>
      <div>Hi Im Dashboard</div>
      <Link to="/">Back Home</Link>
    </>
  )
}