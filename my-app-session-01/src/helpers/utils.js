export function getImageUrl(person, size = 's') {
  //console.log('Avatar imageId:'+person.imageId);
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}