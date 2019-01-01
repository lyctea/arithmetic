const assert = {
  same: (actual, expected, msg) => {
    if (actual.toString() !== expected.toString()) {
      throw new Error(`NOT OK: ${ msg }
        Expected: ${ expected }
        Actual:   ${ actual }
      `);
    }
    console.log(`OK: ${ msg }`);
  }
};

const t = value => {
  const add = n => t(value + n);
  return Object.assign(add, {
    toString: () => `t(${ value })`,
    valueOf: () => value
  });
};

{
  const msg = 'a value t(x) composed with t(0) ==== t(x)';
  const x = 20;
  const a = t(x)(t(0));
  const b = t(x);
  assert.same(a, b, msg);
}
{
  const msg = 'a value t(x) composed with t(1) ==== t(x + 1)';
  const x = 20;
  const a = t(x)(t(1));
  const b = t(x + 1);
  assert.same(a, b, msg);
}
