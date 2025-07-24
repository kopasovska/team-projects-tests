const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
};

const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;
  const isContactType = (contactType) =>
    ['personal', 'work', 'home'].includes(contactType);
  if (isContactType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
