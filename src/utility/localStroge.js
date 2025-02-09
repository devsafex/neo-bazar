const getItemFromLocal = (key) => {
  const localItem = JSON.parse(localStorage.getItem(key));
  return localItem;
};
const setItemToLocal = (key, item) => {
      let localItems = getItemFromLocal(key);
      const existingItem = localItems.find((localItem) => localItem === item);
      if (existingItem) {
        return;
      } else {
        localItems.push(item);
        localStorage.setItem(key, localItems);
      }
    };
    
    export { getItemFromLocal, setItemToLocal };
    