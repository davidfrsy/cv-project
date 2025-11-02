// src/components/Admin/Admin.jsx

import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import AddProject from "../AddProject/AddProject.jsx";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setProjects(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const doneEditing = () => {
    setEditingProject(null);
    getProjects();
  };

  const handleDelete = async (projectId, imageUrl) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus proyek ini?")) {
      return;
    }

    try {
      const fileName = imageUrl.split("/").pop();
      const { error: storageError } = await supabase.storage
        .from("project_images")
        .remove([fileName]);

      if (storageError) {
        console.warn(
          "Could not delete image, maybe it was already deleted: ",
          storageError.message
        );
      }

      const { error: dbError } = await supabase
        .from("projects")
        .delete()
        .match({ id: projectId });

      if (dbError) throw dbError;

      alert("Proyek berhasil dihapus!");
      getProjects();
    } catch (error) {
      alert("Error menghapus proyek: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center p-3 mb-4 bg-light rounded shadow-sm">
        <h1 className="h4 m-0">Admin Dashboard</h1>
        <div>
          <Link
            to="/"
            target="_blank"
            className="btn btn-outline-secondary me-3"
          >
            View Site
          </Link>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="row mb-4">
        <div className="col">
          <AddProject
            onSuccess={doneEditing}
            projectToEdit={editingProject}
            onCancelEdit={doneEditing}
            key={editingProject ? editingProject.id : "new"}
          />
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <div className="card-header">
              <h2 className="h5 m-0">Daftar Project Anda</h2>
            </div>
            <div className="card-body">
              {loading ? (
                <p>Loading projects...</p>
              ) : (
                <div className="table-responsive">
                  {" "}
                  <table className="table table-striped table-hover align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Status Link</th>
                        <th>Repo Private?</th>
                        <th className="text-end">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((project, index) => (
                        <tr key={project.id}>
                          <td>{index + 1}.</td>
                          <td>{project.title}</td>
                          <td>{project.live_link ? "Live" : "Kosong"}</td>
                          <td>{project.is_private ? "Ya" : "Tidak"}</td>
                          <td className="text-end">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={() => handleEdit(project)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() =>
                                handleDelete(project.id, project.image_url)
                              }
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
