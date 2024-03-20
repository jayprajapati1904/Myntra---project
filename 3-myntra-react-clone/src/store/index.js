import { configureStore } from "@reduxjs/toolkit";
import fetchStausSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";
import BagSlice from "./BagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStausSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default myntraStore;
