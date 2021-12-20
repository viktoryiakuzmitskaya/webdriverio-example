function generateMoveToElementByCoordinatesActionObject({ x, y }) {
  return {
    type: "pointer",
    id: "pointToDesctinationCityField",
    parameters: {
      pointerType: "mouse",
    },
    actions: [
      {
        type: "pointerMove",
        x,
        y,
      },
      { type: "pointerDown", button: 0 },
    ],
  };
}

module.exports = generateMoveToElementByCoordinatesActionObject;
