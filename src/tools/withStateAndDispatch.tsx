import * as React from 'react'
import { Store } from '../store';

export default function withStateAndDispatch(actions: any) {

  return (WrappedComponent: any) => {
    return () => {
      const { state, dispatch }: any = React.useContext(Store);
      const initializedActions = Object.values(actions).map((action: any) => action(dispatch))
      debugger
      return (
        <WrappedComponent actions={{}} />
      )
    }
  }
}