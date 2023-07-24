import React from "react"
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom"

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth : state.Auth.isAuth
    }
}

export const WithoutRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) { return <Navigate to={'/login'} /> }
            else {
                return <Component  {...this.props} />
            }
        }
    }
    let connectRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return connectRedirectComponent
}

const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        {...{ params,  }}
      />
    );
  };
  
  export default withRouter;
  

// export const withRouter = (Component) =>{
//     let RouterComponent = (props) => {
//             const match = useMatch('/');
//             return <Component {...props} match={match}/>;
//     }
//     return RouterComponent;
// }