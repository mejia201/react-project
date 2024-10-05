// src/components/Music.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Music = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [songs, setSongs] = useState([]);

  const onSubmit = (data) => {
    setSongs([...songs, data]);
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h5>Agregar Canción</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Título de la Canción:</label>
              <input 
                type="text" 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                {...register('title', { required: true })} 
              />
              {errors.title && <div className="invalid-feedback">Título es obligatorio</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Artista:</label>
              <input 
                type="text" 
                className={`form-control ${errors.artist ? 'is-invalid' : ''}`} 
                {...register('artist', { required: true })} 
              />
              {errors.artist && <div className="invalid-feedback">Artista es obligatorio</div>}
            </div>
            <button type="submit" className="btn btn-primary">Agregar Canción</button>
          </form>
        </div>
      </div>

   
      <div className="mt-5">
        <h5>Lista de Canciones</h5>
        <table className="table table-bordered table-striped table-hover ">
          <thead className="table-primary">
            <tr>
              <th>Título</th>
              <th>Artista</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Music;
