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
};

export const updateRows = (opps, userOpps) => {
  const rows = opps
  rows.forEach((opp) => {
    return opp.selected = false;
  })

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < userOpps.length; j++) {
      if (rows[i].id === userOpps[j].opportunity_id) {
        rows[i].selected = true
      }
    }
  }
  return rows;
};

export const addOpportunity = (opps, id) => {
  const rows = opps.filter((opp) => opp.id !== id);
  const row = opps.filter((opp) => opp.id === id);
  row.selected = true;
  rows.push(row);
  return rows;
};
