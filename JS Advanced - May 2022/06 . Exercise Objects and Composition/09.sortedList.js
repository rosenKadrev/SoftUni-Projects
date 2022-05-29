function createSortedList() {

    return {
        values: [],
        add(element) {
            this.values.push(element);
            this.values.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < this.values.length) {
                this.values.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (index >= 0 && index < this.values.length) {
                return this.values[index];
            }
        },
        size: 0

    }

}
let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));