const assert = require("assert").strict;

// console.log(assert,"assert");

// 1. assert.fail ============

// console.log(assert.fail,"assert fail");
// assert.fail('Что-то пошло не так');

// 2. assert.AssertionError ============
// console.log(assert.AssertionError);

// throw new assert.AssertionError({
//   message: 'Проверка не прошла',
//   expected: 1,
//   actual: 2,
//   operator: '===',
// });

// 3. assert.ok ============

// assert.ok(123); // true
// assert.ok(''); // false

// 4. assert.strictEqual ============

// assert.strictEqual(1, 1); // true
// assert.strictEqual(1, "1"); // false
// assert.strictEqual(1, 2); // false

// 5. assert.notStrictEqual ============

// assert.notStrictEqual(1,2); // true
// assert.notStrictEqual(1,1); // false

// 6. assert.deepStrictEqual ============

// assert.deepStrictEqual({ a: 1 }, { a: 1 }); // true
// assert.deepStrictEqual({ a: 1 }, { a: "1" }); // true
// assert.deepStrictEqual({ a: 1 }, { a: 2 }); // false

// 7. assert.notDeepStrictEqual ============

// assert.notDeepStrictEqual({ a: 1 }, { a: 1 }); // false
// assert.notDeepStrictEqual({ a: 1 }, { a: "1" }); // true
// assert.notDeepStrictEqual({ a: 1 }, { a: 2 }); // false

// 8. assert.throws ============

// assert.throws(() => 1); // false
// assert.throws(() => '1'); // false
// assert.throws(() => {
//     throw new Error('Что-то пошло не так'); // true
// });

// 9. assert.rejects ============

// async function willReject() {
//     throw new Error('Something went wrong');
// }
// async function willNotReject() {
//     return true;
// }

// assert.rejects(willReject()); // true
// assert.rejects(willNotReject()); // false

// 10. assert.doesNotThrow ============

// assert.doesNotThrow(() => true); // true
// assert.doesNotThrow(() => false); // true
// assert.doesNotThrow(() => {
//   throw new Error("Что-то пошло не так"); // false
// });

// 11. assert.doesNotReject ============

// async function willReject() {
//     throw new Error('Something went wrong');
// }
// async function willNotReject() {
//     return true;
// }

// assert.doesNotReject(willReject()); // false
// assert.doesNotReject(willNotReject()); // true

// 12. assert.ifError ============

// assert.ifError(null); // ok
// assert.ifError(undefined); // ok
// assert.ifError(1); // error
// assert.ifError(0); // error

// 13. assert.match ============

// assert.match('I will fail', /pass/); // error
// assert.match(123, /pass/); // error
// assert.match('I will pass', /pass/); // ok

// 14. assert.doesNotMatch ============

// assert.doesNotMatch('I will fail', /pass/); // ok 
// assert.doesNotMatch("123", /pass/); // ok 
// assert.doesNotMatch('I will pass', /pass/); // error




