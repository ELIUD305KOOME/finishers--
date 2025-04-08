import { useEffect, useState } from "react";

export default function Vip_users() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("/register")
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error("Error fetching admins:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/admins/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setAdmins(admins.filter((admin) => admin.id !== id));
        }
      })
      .catch((error) => console.error("Error deleting admin:", error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Vip_users</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Image</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-b">
                <td className="p-3">{admin.name}</td>
                <td className="p-3">{admin.email}</td>
                <td className="p-3">
                  {admin.image_url ? (
                    <img
                      src={admin.image_url}
                      alt={admin.name}
                      className="h-12 w-12 rounded-full"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="p-3">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(admin.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}