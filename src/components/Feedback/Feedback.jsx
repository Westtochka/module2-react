const Feedback = ({ data, totalFeedback, positiveFeedback }) => {
  // const dataKeys = Object.keys(data);
  // const entries = Object.entries(data);

  return (
    // <div>
    //   {dataKeys.map((option) => (
    //     <li key={option}>
    //       {option}:{entries}-ha
    //     </li>
    //   ))}
    // </div>
    <div>
      <li>Good: {data.good}</li>
      <li>Neutral: {data.neutral}</li>
      <li>Bad: {data.bad}</li>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
