import * as React from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import * as actions from './actions'
import { withStateAndDispatch } from '../../tools';

function Dashboard() {
  const { state, dispatch }: any = React.useContext(Store);

  React.useEffect(() => {debugger
    // fetchDashboardAction(dispatch)
  }, [])
  
  return (
    <>
      <div>Hi Im Dashboard</div>
      <Link to="/">Back Home</Link>
    </>
  )
}

export default withStateAndDispatch(actions)(Dashboard)