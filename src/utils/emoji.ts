const isEmoji = (str: string): boolean => /\p{Extended_Pictographic}/u.test(str);

export const removeEmoji = (str: string) => {
  const arr = str.split(' ');

  if (isEmoji(arr[0])) arr.shift();

  return arr.join(' ');
};
