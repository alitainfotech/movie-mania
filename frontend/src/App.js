import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RouteAuthGuard from "./components/RouteAuthGuard";
import EmptyList from "./pages/EmptyList";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <Routes>

      <Route path="/" element={
        <RouteAuthGuard>
          <Home />
        </RouteAuthGuard>
      } />

      <Route path="/add" element={
        <RouteAuthGuard>
          <AddMovie />
        </RouteAuthGuard>
      } />

      <Route path="/edit/:id" element={
        <RouteAuthGuard>
          <AddMovie />
        </RouteAuthGuard>
      } />

      <Route path="/empty" element={
        <RouteAuthGuard>
          <EmptyList />
        </RouteAuthGuard>
      } />
      {/* <Route path="/" element={
        <Layout>
          <UpdateMovie />
        </Layout>
      } /> */}
      
      <Route path="/login" element={<Login />} />
      {/* <Route path="/login" element={<AddMovie />} /> */}
    </Routes>
  );
}

export default App;
