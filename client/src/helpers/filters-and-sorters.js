export const rowFilter = (opps, location = false, category = false) => {
  const rows = [...opps];
  if (!location && !category) {
    return rows;
  }
  if (!location) {
    return rows.filter((opp) => {
      return opp.category_id === category;
    });
  }
  if (!category) {
    return rows.filter((opp) => {
      return opp.location === location;
    });
  }
  return rows.filter((opp) => {
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
  const rows = [...opps];
  rows.forEach((opp) => {
    return (opp.selected = false);
  });

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < userOpps.length; j++) {
      if (rows[i].id === userOpps[j].opportunity_id) {
        rows[i].selected = true;
      }
    }
  }
  return rows;
};

export const addOpportunity = (opps, id) => {
  const rows = opps;
  rows.forEach((opp) => {
    if (Number(id) === Number(opp.id)) {
      opp.selected = true;
      opp.volunteer_count += 1;
    }
  });
  return rows;
};

export const removeOpportunity = (opps, id) => {
  const rows = opps;
  rows.forEach((opp) => {
    if (Number(id) === Number(opp.id)) {
      opp.selected = false;
      opp.volunteer_count -= 1;
    }
  });
  return rows;
};

export const countVolunteersAdded = (opps, allUserOpps) => {
  const rows = [...opps];
  rows.forEach((opp) => {
    let count = 0;
    for (let userOpp of allUserOpps) {
      if (Number(userOpp.opportunity_id) === Number(opp.id)) {
        count += 1;
      }
    }
    opp.volunteer_count = count;
  });
  return rows;
};

// const findUsersOpportunity = ()
