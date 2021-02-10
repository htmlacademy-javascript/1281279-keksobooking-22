// Результат: целое число из диапазона "от...до"
const getRandomNumber = (min, max) => {
  min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
  max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)

  if (min == max) {
    alert('Минимальное значение равно максимальному значению')
  } else if (min > max) {
    alert('Минимальное значение больше максимального значения')
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getFractionNumber = (min, max, dotNumber) => {
  if (min == max) {
    alert('Минимальное значение равно максимальному значению')
  } else if (min > max) {
    alert('Минимальное значение больше максимального значения')
  } else {
    return (Math.random() * (max - min) + min).toFixed(dotNumber);
  }
}

// Случайный элемент массива
const getRandomElementFromArray = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}

// Массив с случайными значениями
const randomCutArr = (arr) => {
  const copyArr = arr.slice(getRandomNumber(0, arr.length));
  const length = getRandomNumber(0, copyArr.length);
  copyArr.slice(0, length);
  return copyArr;
};

const TOTAL_ADS = 10;

const generateSimilarAds = () => {
  const OFFER_TYPE = [
    'palace',
    'flat',
    'house',
    'bungalow'
  ];

  const OFFER_TIME = [
    '12:00',
    '13:00',
    '14:00'
  ];

  const OFFER_FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];

  const OFFER_PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

  const LOCATION_X = getFractionNumber(35.65000, 35.70000, 5);

  const LOCATION_Y = getFractionNumber(139.70000, 139.80000, 5);

  const TITLE = [
    'Большая квартира',
    'Маленькая квартира',
    'Огромный дворец',
    'Маленький дворец',
    'Красивый домик',
    'Некрасивый домик',
    'Уютное бунгало',
    'Неуютное бунгало'
  ];

  const DESCRIPTION = [
    'Уютно и по выгодной цене',
    'Дорого, зато красиво',
    'Близко к морю',
    'Без ремонта, но дешево'
  ]

  const similarAds = {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },
    offer: {
      title: getRandomElementFromArray(TITLE),
      address: LOCATION_X + ', ' + LOCATION_Y,
      price: getRandomNumber(1000, 20000),
      type: getRandomElementFromArray(OFFER_TYPE),
      rooms: getRandomNumber(1, 7),
      guests: getRandomNumber(2, 10),
      checkin: getRandomElementFromArray(OFFER_TIME),
      checkout: getRandomElementFromArray(OFFER_TIME),
      features: randomCutArr(OFFER_FEATURES),
      description: getRandomElementFromArray(DESCRIPTION),
      photos: getRandomElementFromArray(OFFER_PHOTOS)
    },
    location: {
      x: LOCATION_X,
      y: LOCATION_Y,
    },
  };

  return similarAds;
}

const generateArraySimilarAds = (counter) => {
  return new Array(counter).fill(null).map(() => generateSimilarAds());
}

console.log(generateArraySimilarAds(TOTAL_ADS));
