// src/components/AddProject/AddProject.jsx

import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { TECH_OPTIONS } from "../../techConfig.jsx";

const AddProject = ({ onSuccess, projectToEdit, onCancelEdit }) => {
  const isEditMode = !!projectToEdit;

  const [title, setTitle] = useState(projectToEdit ? projectToEdit.title : "");
  const [description, setDescription] = useState(
    projectToEdit ? projectToEdit.description : ""
  );
  const [liveLink, setLiveLink] = useState(
    projectToEdit ? projectToEdit.live_link : ""
  );
  const [codeLink, setCodeLink] = useState(
    projectToEdit ? projectToEdit.code_link : ""
  );
  const [techStack, setTechStack] = useState(
    projectToEdit ? projectToEdit.tech_stack : []
  );
  const [isPrivate, setIsPrivate] = useState(
    projectToEdit ? projectToEdit.is_private : false
  );
  const [imageFile, setImageFile] = useState(null);
  const [oldImageUrl, setOldImageUrl] = useState(
    projectToEdit ? projectToEdit.image_url : null
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleTechStackChange = (techName) => {
    setTechStack((prevTech) => {
      if (prevTech.includes(techName)) {
        return prevTech.filter((t) => t !== techName);
      } else {
        return [...prevTech, techName];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      let imageUrl = oldImageUrl;

      if (imageFile) {
        const fileName = `${Date.now()}-${imageFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from("project_images")
          .upload(fileName, imageFile);
        if (uploadError) throw uploadError;

        imageUrl = supabase.storage
          .from("project_images")
          .getPublicUrl(fileName).data.publicUrl;

        if (isEditMode && oldImageUrl) {
          const oldFileName = oldImageUrl.split("/").pop();
          await supabase.storage.from("project_images").remove([oldFileName]);
        }
      }

      const projectData = {
        title,
        description,
        image_url: imageUrl,
        tech_stack: techStack,
        live_link: liveLink || null,
        code_link: codeLink || null,
        is_private: isPrivate,
      };

      if (isEditMode) {
        const { error: updateError } = await supabase
          .from("projects")
          .update(projectData)
          .match({ id: projectToEdit.id });

        if (updateError) throw updateError;
        setSuccess("Proyek berhasil di-update!");
      } else {
        const { error: insertError } = await supabase
          .from("projects")
          .insert(projectData);

        if (insertError) throw insertError;
        setSuccess("Proyek berhasil ditambahkan!");
      }

      setLoading(false);
      onSuccess();

      setTitle("");
      setDescription("");
      setLiveLink("");
      setCodeLink("");
      setTechStack([]);
      setIsPrivate(false);
      setImageFile(null);
      setOldImageUrl(null);
      e.target.reset();
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="h5 m-0">
          {isEditMode ? "Edit Proyek" : "Tambah Proyek Baru"}
        </h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <div className="mb-3">
            <label className="form-label">Judul Proyek</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Deskripsi</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Gambar Project</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            {isEditMode && oldImageUrl && !imageFile && (
              <small className="d-block mt-2">
                Gambar saat ini:{" "}
                <img src={oldImageUrl} alt="Preview" height="50" />
              </small>
            )}
            {isEditMode && (
              <small className="form-text text-muted">
                Kosongkan jika tidak ingin mengubah gambar.
              </small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Tech Stack</label>
            <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
              {TECH_OPTIONS.map((techName) => (
                <div className="form-check" key={techName}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`tech-${techName}`}
                    value={techName}
                    checked={techStack.includes(techName)}
                    onChange={() => handleTechStackChange(techName)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`tech-${techName}`}
                  >
                    {techName}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Live Link (kosongkan jika tidak ada)
            </label>
            <input
              type="url"
              className="form-control"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Code Link (kosongkan jika tidak ada)
            </label>
            <input
              type="url"
              className="form-control"
              value={codeLink}
              onChange={(e) => setCodeLink(e.target.value)}
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
            />
            <label className="form-check-label">Repo bersifat Private?</label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading
              ? isEditMode
                ? "Updating..."
                : "Menambahkan..."
              : isEditMode
              ? "Update Proyek"
              : "Tambah Proyek"}
          </button>

          {isEditMode && (
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={onCancelEdit}
              disabled={loading}
            >
              Batal
            </button>
          )}

        </form>
      </div>
    </div>
  );
};

export default AddProject;
