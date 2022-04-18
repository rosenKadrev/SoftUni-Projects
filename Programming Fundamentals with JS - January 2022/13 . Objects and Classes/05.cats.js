function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let line of arr) {
        let [name, age] = line.split(' '); // ['Mellow', '2'], ['Tom', '5']
        // console.log([name, age]);
        let cat = new Cat(name, age); // Cat {name: 'Mellow', age: '2'}, Cat {name: 'Tom', age: '5'}
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])
    // cats(['Candy 1', 'Poppy 3', 'Nyx 2'])