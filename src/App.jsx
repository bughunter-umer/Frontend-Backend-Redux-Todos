// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo, updateTodo } from "./Store/Slice/Slice";

// export default function App() {
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleAddOrUpdate = () => {
//     if (!input.trim()) return;
//     if (editId) {
//       dispatch(updateTodo({ id: editId, text: input }));
//       setEditId(null);
//     } else {
//       dispatch(addTodo(input));
//     }
//     setInput("");
//   };

//   const handleEdit = (todo) => {
//     setInput(todo.text);
//     setEditId(todo.id);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddOrUpdate();
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6">
//       <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8 border border-gray-200 text-center transition-all duration-300 hover:shadow-2xl">
        
//         <h2 className="text-4xl font-extrabold mb-8 text-gray-800 tracking-tight">
//           📝 My Todo List
//         </h2>

//         {/* Input & Button */}
//         <div className="flex flex-col sm:flex-row gap-3 mb-8">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown} // 👈 Enter key listener
//             placeholder="Add a new task..."
//             className="flex-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 shadow-sm transition-all duration-200"
//           />
//           <button
//             onClick={handleAddOrUpdate}
//             className={`${
//               editId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-indigo-500 hover:bg-indigo-600"
//             } text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95`}
//           >
//             {editId ? "Update" : "Add"}
//           </button>
//         </div>

//         {/* Todo List */}
//         <ul className="space-y-4">
//           {!todos.length && (
//             <p className="text-gray-500 italic">No todos yet! 🚀</p>
//           )}
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex justify-between items-center bg-gray-50 border border-gray-200 shadow-sm p-4 rounded-xl hover:shadow-lg hover:bg-white transition-all duration-200"
//             >
//               <span className="text-gray-800 font-medium">{todo.text}</span>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(todo)}
//                   className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => dispatch(removeTodo(todo.id))}
//                   className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, createTodo, removeTodo } from "./Store/Slice/Slice";

export default function App() {
  const [input, setInput] = useState("");
  const { items, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(createTodo(input));
      setInput("");
    }
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#1f2937",
            fontSize: "1.8rem",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          📋 My Todo List
        </h1>

        <div style={{ display: "flex", marginBottom: "1.2rem" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add a new todo"
            style={{
              flex: 1,
              padding: "12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px 0 0 8px",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "12px 20px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "0 8px 8px 0",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.background = "#2563eb")}
            onMouseOut={(e) => (e.target.style.background = "#3b82f6")}
          >
            Add
          </button>
        </div>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : items.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6b7280" }}>
            No todos yet. Add one above.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px",
                  borderBottom: "1px solid #e5e7eb",
                  transition: "background 0.2s ease-in-out",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#f9fafb")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <span
                  style={{
                    color: "#374151",
                    fontSize: "1rem",
                    wordBreak: "break-word",
                    maxWidth: "85%",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDelete(todo.id)}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "background 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#dc2626")}
                  onMouseOut={(e) => (e.target.style.background = "#ef4444")}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="max-width: 550px"] {
              padding: 1rem !important;
            }
            h1 {
              font-size: 1.4rem !important;
            }
            input {
              font-size: 0.9rem !important;
            }
            button {
              font-size: 0.9rem !important;
              padding: 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
