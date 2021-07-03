export const rowFilter = (opps, location = false, category = false) => {
  if (!location && !category) {
    return opps;
  }
  if (!location) {
    return opps.filter((opp) => {
      return opp.category_id === category;
    });
  }
  if (!category) {
    return opps.filter((opp) => {
      return opp.location === location;
    });
  }
  return opps.filter((opp) => {
    return opp.location === location && opp.category_id === category;
  });
};

export const columnSort = (opps, column) => {
  const sortedOpps = opps.sort((a, b) => {
    let nameA = a[column].toUpperCase();
    let nameB = b[column].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedOpps;
}


