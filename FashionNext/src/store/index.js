import { createSlice, configureStore } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {productList: [{
      "id": 1,
      "title": "Simple black t-shirt",
      "description": " Summers will never be more cooler, get this is a simple black tshirt made with 100% cotton.",
      category: ["men", "tshirt"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125009/ildpqwkeeizfq3do5fhp.png"
    },
    {
      "id": 2,
      "title": "Simple black t-shirt",
      "description": " Summers will never be more cooler, get this is a simple black tshirt made with 100% cotton.",
      category: ["women", "tshirt"],
      price: 799,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125009/loejzx1wy0tom7jdweuk.png"
    },
    {
      "id": 3,
      "title": "Blue Jeans for men",
      "description": "A blue jeans comfortable enough to play basketball in it",
      category: ["men", "jeans"],
      price: 1299,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125004/sfs6m3kqcm46fkhnbke5.png"
    },
    {
      "id": 4,
      "title": "Blue jeans for women",
      "description": "Never hesitate to do yoga even with a jeans",
      category: ["women", "jeans"],
      price: 1299,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125004/ukwqotwur3dnf4tgteki.png"
    },
    {
      "id": 5,
      "title": "Blue Party Top",
      "description": "Grab all the attention with this royal blue party wear",
      category: ["women", "top"],
      price: 12999,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125012/lsrlgvc9syrvqqji7jr6.png"
    },
    {
      "id": 6,
      "title": "Grey Three Piece Suit",
      "description": "Grab that client interview with the radiance of your style",
      category: ["men", "suit"],
      price: 18999,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125012/xtuo0lhbuyb4wbhzogw5.png"
    },
    {
      "id": 7,
      "title": "Royal Blue Three Piece suit",
      "description": "Turn some heads with a formal they've never experienced",
      category: ["men", "suit"],
      price: 19999,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125004/lhc3xfuirp8xyvmh4sku.png"
    },
    {
      "id": 8,
      "title": "A Silky and Sweet Saree",
      "description": "Tradition never goes out of style specially with this saree",
      category: ["women", "sarees"],
      price: 11999,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125011/wzcyyd9awhm941uzpji5.png"
    },
    {
      "id": 9,
      "title": "Pink and Posh Top",
      "description": "Party like there's no tomorrow with this baby pink colored top",
      category: ["women", "top"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125011/wtbn4vnusnx220nif3m8.png"
    },
    {
      "id": 10,
      "title": "Spiderman T-shirt",
      "description": "With great power there must come great urge to buy this tee",
      category: ["men", "tshirt"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125002/f506ohamsh8bhpcxw1tq.png"
    },
    {
      "id": 11,
      "title": "Spiderman T-shirt",
      "description": "With great power there must come great urge to buy this tee",
      category: ["women", "tshirt"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125003/a0hc64e89hjtjwecfzxl.png"
    },
    {
      "id": 12,
      "title": "A Royal Kurta",
      "description": "Bring back your royalty with our Royal Kurta collections",
      category: ["men", "kurta"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125005/ukauorxckdaxwlw9oijb.png"
    },
    {
      "id": 13,
      "title": "Vibrant Purple Saree",
      "description": "Some sarees are meant for only for a special person, this one definitely is for you",
      category: ["women", "sarees"],
      price: 16999,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125008/nwbd3lznxbaqjhrstvvb.png"
    },
    {
      "id": 14,
      "title": "Simple Blue t-shirt",
      "description": " Summers will never be more cooler, get this is a simple black tshirt made with 100% cotton.",
      category: ["men", "tshirt"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125002/p0rbql2kbsceuvdda68d.png"
    },
    {
      "id": 15,
      "title": "Simple Blue t-shirt",
      "description": " Summers will never be more cooler, get this is a simple black tshirt made with 100% cotton.",
      category: ["women", "tshirt"],
      price: 699,
      "image": "https://res.cloudinary.com/picassobykaran/image/upload/v1699125011/fh0py4uzfrh8pifoqnxk.png"
    }],
    filterRange: 20000,
    filterCategory: [],
    current: 1
},
    
    reducers: {
      updateRange(state,action){
        state.filterRange = action.payload;
      },
      addCategory(state,action){
        state.filterCategory.push(action.payload)
      },
      removeCategory(state,action){
        const index = state.filterCategory.indexOf(action.payload);
        state.filterCategory.splice(index,1);
      },
      setNextCurrent(state){
        state.current = state.current+1;
      },
      setPrevCurrent(state){
        state.current = state.current-1;
      },
      restoreCurrent(state){
        state.current = 1;
      }
    }
});
const store = configureStore({
  reducer: productsSlice.reducer
})
export const ProductActions = productsSlice.actions;
export default store;