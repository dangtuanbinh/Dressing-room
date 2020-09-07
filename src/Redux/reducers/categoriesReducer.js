let initialState = [
  { tabName: "tabTopClothes", showName: "Shirt", type: "topclothes" },
  { tabName: "tabBotClothes", showName: "Pants and Dress", type: "botclothes" },
  { tabName: "tabShoes", showName: "Shoes", type: "shoes" },
  { tabName: "tabHandBags", showName: "Bag/Hand-bags", type: "handbags" },
  { tabName: "tabNecklaces", showName: "Necklaces", type: "necklaces" },
  // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
  { tabName: "tabHairStyle", showName: "Hair", type: "hairstyle" },
  { tabName: "tabBackground", showName: "Background", type: "background" },
];

const CatrgoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CatrgoriesReducer;
