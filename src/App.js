import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { Protected, Admin } from "./middleware/route";
import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Error = lazy(() => import("./pages/Error"));
const Profile = lazy(() => import("./pages/Profile"))

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Dashboard type={"users"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/doctors"
            element={
              <Admin>
                <Dashboard type={"doctors"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/appointments"
            element={
              <Admin>
                <Dashboard type={"appointments"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/applications"
            element={
              <Admin>
                <Dashboard type={"applications"} />
              </Admin>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
