import { useAuth } from "../hooks/useAuth";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useNavigate } from "react-router-dom";

function Dashboard({ products, addProduct, deleteProduct }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <ProductForm addProduct={addProduct} />
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default Dashboard;
