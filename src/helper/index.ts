export const SplitName = (name: string) => {
  const sName = name.split(' ');
  return `${sName[0][0]}${sName[1][0]}`;
};

export const timeSince = (date: number) => {
  const currentDate = new Date().getTime();
  const timeDistance = Math.floor((currentDate - date) / 1000);

  let i = timeDistance / 31536000; // 1 year is 31536000 second
  if (i >= 1) return `${Math.floor(i)} years ago`;

  i = timeDistance / 2592000; // 1 month is 2592000 second
  if (i >= 1) return `${Math.floor(i)} month ago`;

  i = timeDistance / 86400; // 1 day is 86400 second
  if (i >= 1) return `${Math.floor(i)} day ago`;

  i = timeDistance / 3600; // 1 hour is 3600 second
  if (i >= 1) return `${Math.floor(i)} h ago`;

  i = timeDistance / 60; // 1 minute is 60 second
  if (i >= 1) return `${Math.floor(i)} minute ago`;

  return 'a second ago';
};
