export const normalize = (text: string) => {
  return (
    text
      .toLowerCase()
      .normalize('NFD')
      // Remove this range of characters
      .replace(/[\u0300-\u036f]/g, '')
  );
};

export const normalizeForId = (text: string) => {
  return (
    normalize(text)
      // Replace whitespace characters with underscore
      .replace(/\s+/g, '_')
      // Remove parantheses
      .replace(/[()]/g, '')
  );
};
