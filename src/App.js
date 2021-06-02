import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "./copmonents/AppBar/AppBar";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./copmonents/PrivateRoute/PrivateRoute";
import PublicRoute from "./copmonents/PublicRoute/PublicRoute";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap"

const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }
//   render() {
//     return (
//       <>
//         <AppBar />
//         <Suspense fallback={<p>Загружаем...</p>}>
//           <Switch>
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo={"/contacts"}
//               component={RegisterView}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo={"/contacts"}
//               component={LoginView}
//             />
//             <PrivateRoute
//               path="/contacts"
//               component={ContactsView}
//               redirectTo="/login"
//             />
//           </Switch>
//         </Suspense>
//       </>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
