import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewBeer() {
  const [nameInput, setNameInput] = useState("");
  const [taglineInput, setTaglineInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [firstInput, setFirstInput] = useState("");
  const [tipsInput, setTipsInput] = useState("");
  const [attenuationInput, setAttenuationInput] = useState(0);
  const [contributedInput, setContributedInput] = useState("");

  const handleNameInput = async (event) => {
    setNameInput(event.target.value);
  };
  const handleTaglineInput = async (event) => {
    setTaglineInput(event.target.value);
  };
  const handleDescriptionInput = async (event) => {
    setDescriptionInput(event.target.value);
  };
  const handleFirstInput = async (event) => {
    setFirstInput(event.target.value);
  };
  const handleTipsInput = async (event) => {
    setTipsInput(event.target.value);
  };
  const handleAttenuationInput = async (event) => {
    setAttenuationInput(event.target.value);
  };
  const handleContributedInput = async (event) => {
    setContributedInput(event.target.value);
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const newBeer = {
        name: nameInput,
        tagline: taglineInput,
        description: descriptionInput,
        first_brewed: firstInput,
        brewers_tips: tipsInput,
        attenuation_level: attenuationInput,
        contributed_by: contributedInput,
      };
      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      return (
        <div>
            <h1>Good job!</h1>
            <Link to="/">Go to home</Link>
        </div>
      )
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name: </label>
        <input type="text" value={nameInput} onChange={handleNameInput} name="name" />
        <br />
        <label htmlFor="tagline">Tagline: </label>
        <input type="text" value={taglineInput} onChange={handleTaglineInput} tagline="tagline" />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          value={descriptionInput}
          onChange={handleDescriptionInput}
          name="description"
        />
        <br />
        <label htmlFor="">First: </label>
        <input type="text" value={firstInput} onChange={handleFirstInput} />
        <br />
        <label htmlFor="">Tips: </label>
        <input type="text" value={tipsInput} onChange={handleTipsInput} />
        <br />
        <label htmlFor="attenuation">Attenuation: </label>
        <input
          type="number"
          value={attenuationInput}
          onChange={handleAttenuationInput}
          name="attenuation"
        />
        <br />
        <label htmlFor="contributed">Contributed: </label>
        <input
          type="text"
          value={contributedInput}
          onChange={handleContributedInput}
          name="contributed"
        />
        <br />
        <button>Create new beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
