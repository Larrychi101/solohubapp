import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call Azure Function to save feedback
    await axios.post("/api/saveFeedback", { feedback });

    setFeedback("We love feedback, it helps us to understand how we are performing and how we can improve our services");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;