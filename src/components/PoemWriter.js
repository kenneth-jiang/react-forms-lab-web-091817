import React from 'react';

const isValidPoem = (poem) => {
  const splitPoemByLines = poem.split("\n");
  console.log(splitPoemByLines)
  if (splitPoemByLines.length === 3) {
    const firstLineWords = splitPoemByLines[0].trim().split(" ");
    if (firstLineWords.length === 5) {
      const secondLineWords = splitPoemByLines[1].trim().split(" ");
      if (secondLineWords.length === 3) {
        const thirdLineWords = splitPoemByLines[2].trim().split(" ");
        if (thirdLineWords.length === 5) {
          return true;
        }
      }
    }
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value,
      validPoem: isValidPoem(event.target.value),
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {!this.state.validPoem &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }
      </div>
    );
  }
}

export default PoemWriter;
