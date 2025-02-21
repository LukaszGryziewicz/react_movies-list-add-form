import React, { useState } from 'react';

interface Props {
  onAddMovie: (movie: Movie) => void
}

export const NewMovie: React.FC<Props> = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newMovie = {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    };

    onAddMovie(newMovie);
    clearForm();
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder="title"
        required
        value={title}
        data-cy="form-title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        required
        data-cy="form-description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="imgUrl"
        value={imgUrl}
        required
        data-cy="form-imgUrl"
        onChange={(event) => {
          setImgUrl(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="imbdUrl"
        value={imdbUrl}
        required
        data-cy="form-imdbUrl"
        onChange={(event) => {
          setImdbUrl(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="imbdId"
        value={imdbId}
        required
        data-cy="form-imdbId"
        onChange={(event) => {
          setImdbId(event.target.value);
        }}
      />
      <button type="submit" data-cy="form-submit-button">
        Add film
      </button>
    </form>
  );
};
