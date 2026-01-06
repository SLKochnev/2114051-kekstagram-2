const sliderContainer = document.querySelector('.effect-level__slider');
const effectValueInput = document.querySelector('.effect-level__value');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectsList = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview img');

const effects = {
  none: {
    min: 0,
    max: 0,
    step: 0,
    unit: ''
  },
  chrome: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

let currentEffect = 'none';

const applyEffect = (value) => {
  effectValueInput.value = value;

  if (currentEffect === 'none') {
    imagePreview.style.filter = 'none';
    return;
  }

  let filterString = '';

  switch (currentEffect) {
    case 'chrome':
      filterString = `grayscale(${value})`;
      break;
    case 'sepia':
      filterString = `sepia(${value})`;
      break;
    case 'marvin':
      filterString = `invert(${value}%)`;
      break;
    case 'phobos':
      filterString = `blur(${value}px)`;
      break;
    case 'heat':
      filterString = `brightness(${value})`;
      break;
  }

  imagePreview.style.filter = filterString;
};

const createSlider = () => {
  if (!noUiSlider) {
    return;
  }

  noUiSlider.create(sliderContainer, {
    start: 0,
    connect: 'lower',
    range: { min: 0, max: 100 },
    step: 1,
    format: {
      to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value)
    }
  });

  sliderContainer.noUiSlider.on('update', (values) => {
    applyEffect(parseFloat(values[0]));
  });
};

const changeEffect = (effectName) => {
  currentEffect = effectName;
  const effect = effects[effectName];

  if (effectName === 'none') {
    effectLevelContainer.classList.add('hidden');
    applyEffect(0);
    return;
  }

  effectLevelContainer.classList.remove('hidden');

  sliderContainer.noUiSlider.updateOptions({
    start: effect.max,
    range: { min: effect.min, max: effect.max },
    step: effect.step
  });

  applyEffect(effect.max);
};

const addEffectListeners = () => {
  effectsList.addEventListener('change', (evt) => {
    if (evt.target.type === 'radio') {
      changeEffect(evt.target.value);
    }
  });
};

const resetEffects = () => {
  currentEffect = 'none';

  const noneRadio = document.querySelector('#effect-none');
  noneRadio.checked = true;

  effectLevelContainer.classList.add('hidden');
  imagePreview.style.filter = 'none';
  effectValueInput.value = '';

  if (sliderContainer.noUiSlider) {
    sliderContainer.noUiSlider.set(0);
  }
};

const initEffects = () => {
  if (!sliderContainer || !imagePreview) {
    return;
  }

  createSlider();
  addEffectListeners();
  resetEffects();
};

export { initEffects, resetEffects };
