var commands = require('./Glo/core/keywords');

var testIntArray = [0, 1, 2, 3, 4];
var testStringArray = [
  'Ivan Ivanov',
  'Petr Petrov',
  'Sidr Sidorov',
  'Andrey Andreev'
];
var testSmartArray = [
  [1.25, 1.45, 1.65, 1.88, 1.02],
  [2.01, 2.56, 2.47, 2.36, 2.14],
  [5.247, 5.69, 5.32]
];
var testSmartArray2 = [
  [
    [1.25, 1.45, 1.65, 1.88, 1.02],
    [2.01, 2.56, 2.47, 2.36, 2.14],
    [5.247, 5.69, 5.32]
  ],
  [
    [1.25, 1.45, 1.65, 1.88, 1.02],
    [2.01, 2.56, 2.47, 2.36, 2.14],
    [5.247, 5.69, 5.32]
  ],
  [
    [1.25, 1.45, 1.65, 1.88, 1.02],
    [2.01, 2.56, 2.47, 2.36, 2.14],
    [5.247, 5.69, 5.32]
  ]
];
var testSimpleObject = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 35,
  email: 'kazban.oleh@gmail.com',
  address: 'Ukraine, Kharkiv, Academician Walter str., 19, apt. #567',
  phone: '+380 67 776 06 70'
};
var testSmartObject = {
  firstName: 'Oleh',
  lastName: 'Kazban',
  age: 35,
  email: 'kazban.oleh@gmail.com',
  address: 'Ukraine, Kharkiv, Academician Walter str., 19, apt. #567',
  phone: '+380 67 776 06 70',
  children: [
    {
      firstName: 'Dmitriy',
      lastName: 'Kazban',
      age: 8
    },
    {
      firstName: 'Veronika',
      lastName: 'Kazban',
      age: 4
    }
  ]
};
var testSmartObject2 = {
  1: {
    name: 'first',
    id: 0
  },
  2: {
    name: 'first',
    id: 0
  },
  3: {
    name: 'first',
    id: 0
  }
};

var testString = 'try to test me :)';
var testString2 = '100';
var testString3 = '100.55';

//commands.print(testIntArray);
//commands.print(testStringArray);
//commands.print(testSimpleObject);
//commands.print(testSmartObject2);
//commands.print(testSmartArray2);

var testParseInt = parseInt(testString);
var testParseInt2 = parseInt(testString2);
var testParseInt3 = parseInt(testString3);
var testParseFloat3 = parseFloat(testString3);

commands.print(testParseInt);
commands.print(testParseInt2);
commands.print(testParseInt3);
commands.print(testParseFloat3);
