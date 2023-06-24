import useGenres from '../hooks/useGenres';

const GenraList = () => {
  const { data } = useGenres()
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenraList;
