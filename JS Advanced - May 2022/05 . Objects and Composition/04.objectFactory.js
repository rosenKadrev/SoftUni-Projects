function factory(library, orders) {

    const result = [];

    for (let order of orders) {
        const object = {};
        const template = order.template;

        for (let prop in order.template) {
            object[prop] = template[prop];
        }

        const parts = order.parts;
        for (const part of parts) {
            object[part] = library[part];
        }
        result.push(object);
    }
    return result;
}

const library = {
    print: function() {
        console.log(`${this.name} is printing a page`);
    },
    scan: function() {
        console.log(`${this.name} is scanning a document`);
    },
    play: function(artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [{
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);



function factory(library, orders) {

    const result = [];

    for (let order of orders) {
        const object = Object.assign({}, order.template);

        for (const part of order.parts) {
            object[part] = library[part];
        }
        result.push(object);
    }
    return result;
}



function factory(library, orders) {

    const arrForReturn = [];

    for (const order of orders) {

        const obj = {};
        obj.name = order.template.name;
        const operations = order.parts;

        for (const operation of operations) {
            obj[operation] = library[operation];
        }
        arrForReturn.push(obj)
    }
    return arrForReturn;

}