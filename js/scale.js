const SKALE_STAP = 25;
const SCALE_MAX = 100;
const SKALE_DEFAULT = 100;
const SKALE_MAXIMUM = 25;
let currentScale = SKALE_DEFAULT;

const scaleСontrolValue = document.querySelector('.scale__control--value');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');


const updateScale = () => {
  scaleСontrolValue.value = `${currentScale}%`;
  imagePreview.style.transform = `scale(${currentScale / 100})`;
};

const resetScale = () => {
  currentScale = SKALE_DEFAULT;
  updateScale();
};

smallerButton.addEventListener('click', () => {
  const newScale = currentScale - SKALE_STAP;

  if (newScale >= SKALE_MAXIMUM) {
    currentScale = newScale;
    updateScale();
  }
});

biggerButton.addEventListener('click', () => {
  const newScale = currentScale + SKALE_STAP;

  if (newScale <= SCALE_MAX) {
    currentScale = newScale;
    updateScale();
  }
});


updateScale();

export { resetScale };
