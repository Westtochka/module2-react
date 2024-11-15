const Options = ({ data, handleClickByOption, handleReset }) => {
  const dataKeys = Object.keys(data);

  return (
    <div>
      {dataKeys.map((option) => (
        <button onClick={() => handleClickByOption(option)} key={option}>
          {option}:
        </button>
      ))}
      {(data.good > 0 || data.neutral > 0 || data.bad > 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};
export default Options;
