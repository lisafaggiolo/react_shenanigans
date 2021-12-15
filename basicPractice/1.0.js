

// Copying object 1 level //

const original = { one: 1 };
const bad = original;
const good = { ...original };

console.log( original, ( original === original ));
console.log( bad, ( original === bad ));
console.log( good, ( original === good ));

// Copycat object 2 levels //

const cat = { one: 1, sub: { two: 2}};
const copyCat = { ...cat, sub: { ...cat.sub }};

console.log( cat, cat === copyCat );
console.log( cat.sub, cat.sub === copyCat.sub );