const creditOffer = {
  'mortgage': {
    creditName: `Сумма ипотеки`,
    creditGoal: `Ипотека`,
    creditCostObject: `Стоимость недвижимости`,
    creditNameError: `ипотечные кредиты`,
    creditValueError: `500 000 рублей.`
  },
  'carLoan': {
    creditName: `Сумма автокредита`,
    creditGoal: `Автокредит`,
    creditCostObject: `Стоимость автомобиля`,
    creditNameError: `автокредиты`,
    creditValueError: `200 000 рублей.`
  },
  'consumer': {
    creditName: `Сумма кредита`,
    creditGoal: `Потребительский кредит`,
    creditCostObject: `Сумма кредита`
  }
};

const placeMarks = [
  {
    id: `russia`,
    latitude: 56.874432,
    longitude: 37.5632434,
    hintName: `Отделение ЛигаБанка в Москве`
  },
  {
    id: `russia`,
    latitude: 59.946184,
    longitude: 30.355989,
    hintName: `Отделение ЛигаБанка в Санкт-Петербурге`
  },
  {
    id: `russia`,
    latitude: 51.540858,
    longitude: 46.007369,
    hintName: `Отделение ЛигаБанка в Саратове`
  },
  {
    id: `russia`,
    latitude: 67.613040,
    longitude: 33.667750,
    hintName: `Отделение ЛигаБанка в Кировске`
  },
  {
    id: `russia`,
    latitude: 57.137405,
    longitude: 65.545911,
    hintName: `Отделение ЛигаБанка в Тюмени`
  },
  {
    id: `russia`,
    latitude: 54.996296,
    longitude: 73.460759,
    hintName: `Отделение ЛигаБанка в Омске`
  },
  {
    id: `uis`,
    latitude: 40.5411601,
    longitude: 49.705961,
    hintName: `Отделение ЛигаБанка в Баку`
  },
  {
    id: `uis`,
    latitude: 41.309875,
    longitude: 69.280696,
    hintName: `Отделение ЛигаБанка в Ташкенте`
  },
  {
    id: `uis`,
    latitude: 54.085192,
    longitude: 27.537845,
    hintName: `Отделение ЛигаБанка в Минске`
  },
  {
    id: `uis`,
    latitude: 43.254467,
    longitude: 76.948570,
    hintName: `Отделение ЛигаБанка в Алма-Ате`
  },
  {
    id: `europe`,
    latitude: 49.054160,
    longitude: 2.275631,
    hintName: `Отделение ЛигаБанка в Париже`
  },
  {
    id: `europe`,
    latitude: 50.362140,
    longitude: 14.440925,
    hintName: `Отделение ЛигаБанка в Праге`
  },
  {
    id: `europe`,
    latitude: 51.751571,
    longitude: -0.189301,
    hintName: `Отделение ЛигаБанка в Лондоне`
  },
  {
    id: `europe`,
    latitude: 42.098137,
    longitude: 12.522328,
    hintName: `Отделение ЛигаБанка в Риме`
  }
];

export {
  creditOffer, placeMarks
};
