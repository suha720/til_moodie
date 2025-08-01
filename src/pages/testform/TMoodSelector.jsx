import React from "react";

const moods = [
  { id: "joy", label: "기쁨", img: "./기쁨.svg" },
  { id: "sad", label: "슬픔", img: "./슬픔.svg" },
  { id: "anxious", label: "불안", img: "./불안.svg" },
  { id: "angry", label: "분노", img: "./분노.svg" },
  { id: "calm", label: "평온", img: "./평온.svg" },
];

function TMoodSelector({ formState, setFormState }) {
  const handleChange = e => {
    setFormState({ ...formState, mood: e.target.value });
  };

  return (
    <div>
      <h3>감정 체크</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        {moods.map(mood => (
          <div key={mood.id}>
            <input
              type="radio"
              name="mood"
              id={mood.id}
              value={mood.label}
              checked={formState.mood === mood.label}
              onChange={handleChange}
              hidden
            />
            <label htmlFor={mood.id}>
              <img
                src={mood.img}
                alt={mood.label}
                style={{
                  width: 50,
                  opacity: formState.mood === mood.label ? 1 : 0.4,
                  transition: "opacity 0.2s",
                }}
              />
              <p>{mood.label}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TMoodSelector;
