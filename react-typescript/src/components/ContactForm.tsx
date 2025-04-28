import { FormEvent, useRef, useState } from "react";

interface ContactFormData {
  name: string;
  age: number;
  hobby: string;
};

const ContactForm = () => {
  const [submittedData, setSubmittedData] = useState<ContactFormData>({
    name: '',
    age: 0,
    hobby: ''
  });

  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const hobby = useRef<HTMLInputElement>(null);

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const ageValue = age.current!.value;
    const hobbyValue = hobby.current!.value;

    setSubmittedData({
      name: nameValue,
      age: Number(ageValue),
      hobby: hobbyValue
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        ref={name}
      />
      <input
        type="number"
        placeholder="Enter your age"
        ref={age}
      />
      <input
        type="text"
        placeholder="Enter your hobby"
        ref={hobby}
      />
      <button
        type="submit"
      >
        Submit
      </button>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Age: {submittedData.age}</h1>
        <h1>Hobby: {submittedData.hobby}</h1>
      </section>
    </form>
  );
};

export default ContactForm;