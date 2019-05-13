function sum() {
    let args = Array.prototype.slice.call(arguments);
    return args.reduce((acc, el) => {return acc + el;});
}


function sum2(...args) {
    return args.reduce((acc, el) => acc + el);
}

// console.log(sum2(1,2,3,4));


Function.prototype.myBind = function(ctx, ...bindArgs) {
    return (...callArgs) => {
        return this.apply(ctx, bindArgs.concat(callArgs));
    };
}




function curriedSum(numArgs) {
    const numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return sum2(...numbers);
        } else {
            return _curriedSum;
        }
    };
    // return _curriedSum;
}

// const nums = curriedSum(4);
// console.log(nums(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
    const args = [];

    const _curry = (arg) => {
        args.push(arg);

        if (args.length < numArgs) {
            return _curry;
        } else {
            // return this.apply(this, args);
            return this(...args);
        }
    };

    return _curry;
};

const test = sum2.curry(4);
// console.log(test(5));


console.log(test(5)(30)(20)(1)); // => 56


// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true





