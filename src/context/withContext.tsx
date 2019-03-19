import React from "react";

export default function withContext(
  Component: React.ComponentType,
  Context: any
) {
  return function WrapperComponent(props: any) {
    return (
      <Context.Consumer>
        {(store: any) => <Component {...props} context={store} />}
      </Context.Consumer>
    );
  };
}
