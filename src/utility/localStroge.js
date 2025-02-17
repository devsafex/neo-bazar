const getItemFromLocal = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const setItemToLocal = (key, item) => {
  let localItems = getItemFromLocal(key);

  if (!localItems.includes(item)) {
    localItems.push(item);
    localStorage.setItem(key, JSON.stringify(localItems));
  }
};

export { getItemFromLocal, setItemToLocal };
