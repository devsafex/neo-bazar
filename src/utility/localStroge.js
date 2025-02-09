const getItemFromLocal = (key) => {
  const localItem = JSON.parse(localStorage.getItem(key));
  return localItem;
};
