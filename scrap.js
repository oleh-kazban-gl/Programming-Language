var commands = require('./Glo/core/keywords');
var sinon = require('sinon');

//var testIntArray = [0, 1, 2, 3, 4];
//var testStringArray = [
//  'Ivan Ivanov',
//  'Petr Petrov',
//  'Sidr Sidorov',
//  'Andrey Andreev'
//];
//var testSmartArray = [
//  [1.25, 1.45, 1.65, 1.88, 1.02],
//  [2.01, 2.56, 2.47, 2.36, 2.14],
//  [5.247, 5.69, 5.32]
//];
//var testSmartArray2 = [
//  [
//    [1.25, 1.45, 1.65, 1.88, 1.02],
//    [2.01, 2.56, 2.47, 2.36, 2.14],
//    [5.247, 5.69, 5.32]
//  ],
//  [
//    [1.25, 1.45, 1.65, 1.88, 1.02],
//    [2.01, 2.56, 2.47, 2.36, 2.14],
//    [5.247, 5.69, 5.32]
//  ],
//  [
//    [1.25, 1.45, 1.65, 1.88, 1.02],
//    [2.01, 2.56, 2.47, 2.36, 2.14],
//    [5.247, 5.69, 5.32]
//  ]
//];
//var testSimpleObject = {
//  firstName: 'Oleh',
//  lastName: 'Kazban',
//  age: 35,
//  email: 'kazban.oleh@gmail.com',
//  address: 'Ukraine, Kharkiv, Academician Walter str., 19, apt. #567',
//  phone: '+380 67 776 06 70'
//};
//var testSmartObject = {
//  firstName: 'Oleh',
//  lastName: 'Kazban',
//  age: 35,
//  email: 'kazban.oleh@gmail.com',
//  address: 'Ukraine, Kharkiv, Academician Walter str., 19, apt. #567',
//  phone: '+380 67 776 06 70',
//  children: [
//    {
//      firstName: 'Dmitriy',
//      lastName: 'Kazban',
//      age: 8
//    },
//    {
//      firstName: 'Veronika',
//      lastName: 'Kazban',
//      age: 4
//    }
//  ]
//};
//var testSmartObject2 = {
//  1: {
//    name: 'first',
//    id: 0
//  },
//  2: {
//    name: 'first',
//    id: 0
//  },
//  3: {
//    name: 'first',
//    id: 0
//  }
//};
//
//var testString = 'try to test me :)';
//var testString2 = '100';
//var testString3 = '100.55';
//
//var testInt = 100;
//var testInt2 = -144;
//var testFloat = 100.11;
//var testFloat2 = -144.22;
//
//commands.print(testIntArray);
//commands.print(testStringArray);
//commands.print(testSimpleObject);
//commands.print(testSmartObject2);
//commands.print(testSmartArray2);
//
//var testParseInt = parseInt(testString);
//var testParseInt2 = parseInt(testString2);
//var testParseInt3 = parseInt(testString3);
//var testParseFloat3 = parseFloat(testString3);
//
//commands.print(testParseInt);
//commands.print(testParseInt2);
//commands.print(testParseInt3);
//commands.print(testParseFloat3);
//
//commands.print(commands.module(testInt));
//commands.print(commands.module(testInt2));
//commands.print(commands.module(testFloat));
//commands.print(commands.module(testFloat2));
//
//var spy = sinon.spy();
//
//commands.print(spy());
//
//commands.print(spy.called);
//commands.print(spy.calledOnce);
//commands.print(spy.calledTwice);

var testInt = 3;
var testInt2 = 4;

var testFloat = 1.33;
var testFloat2 = 2.44;

var testString = 'try to test ';
var testString2 = 'me :)';

console.log(commands.add(testInt, testInt2));
console.log(commands.add(testFloat, testFloat2));
console.log(commands.add(testString, testString2));
console.log(commands.add(testInt,  testFloat));

var testSource = 'print(\'Hello World :)\');';
var testSource2 = 'print(random(0,100));';
console.log(testSource.match(/^\w*\(/)[0]);
console.log(testSource.match(/\((.*?)\);/)[1]);
console.log(testSource.match(/\((.*?)\);/));

console.log(testSource2.match(/^\w*\(/)[0]);
console.log(testSource2.match(/\((.*?)\);/)[1]);
console.log(testSource2.match(/\((.*?)\);/));




