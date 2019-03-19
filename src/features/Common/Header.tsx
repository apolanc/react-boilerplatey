import * as React from "react";
import AppProvider from "../../AppProvider";
import withContext from "../../context/withContext";

function Header(props: any) {
  debugger;
  return (
    <div>
      <a>Probando esta vaina</a>
    </div>
  );
}

export default withContext(Header, AppProvider.AppContext);
