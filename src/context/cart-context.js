import React from "react";
const Context = React.createContext({});

const withCartContext = (WrappedComponent) => {
    const WithHOC = () => {
      return (
        <Context.Consumer>
          {(context) => <WrappedComponent context={context} />}
        </Context.Consumer>
      );
    };
  
    return WithHOC;
  };
  
  export default withCartContext;

