const renderPhotos = (photoDescriptions) => {
  const template = document.querySelector('#picture');

  const container = document.querySelector('.pictures');

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < photoDescriptions.length; i++) {
    const photo = photoDescriptions[i];

    const photoElement = template.content.cloneNode(true);

    const img = photoElement.querySelector('.picture__img');
    const likes = photoElement.querySelector('.picture__likes');
    const comments = photoElement.querySelector('.picture__comments');

    img.src = photo.url;

    img.alt = photo.description;

    likes.textContent = photo.likes;

    comments.textContent = photo.comments.length;

    fragment.appendChild(photoElement);
  }

  container.appendChild(fragment);
};

export { renderPhotos };
