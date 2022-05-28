import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Login/Register";
import Login from "./Login/Login";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./Parts/Purchase";
import RequireAuth from "./Login/RequireAuth";
import Dashboard from "./Dashboard/Dashboard";
import MyPurchase from "./Dashboard/MyPurchase";
import Profile from "./Dashboard/Profile";
import AddReview from "./Dashboard/AddReview";
import Users from "./Dashboard/Users";
import AllOrders from "./Dashboard/AllOrders";
import AddProduct from "./Dashboard/AddProduct";
import ManageProducts from "./Dashboard/ManageProducts";
import NotFound from "./Shared/NotFound";
import RequireAdmin from "./Login/RequireAdmin";
import Payment from "./Dashboard/Payment";

import Blogs from "./Blogs/Blogs";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index path="purchase" element={<MyPurchase />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="review" element={<AddReview />} />
          <Route
            path="users"
            element={
              
                <Users />
              
            }
          />
          <Route
            path="order"
            element={
              
                <AllOrders />
              
            }
          />
          <Route
            path="product"
            element={
              
                <AddProduct />
              
            }
          />
          <Route
            path="inventory"
            element={
              
                <ManageProducts />
              
            }
          />
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
