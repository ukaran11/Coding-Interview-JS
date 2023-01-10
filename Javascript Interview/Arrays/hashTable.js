class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i=0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(hash)
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
            // console.log(this.data)
        }

        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log("currentBucket",currentBucket)
        if(currentBucket) {
            for(let i=0; i< currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = []
        for (let i=0; i<this.data.length; i++) {
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 1000)
myHashTable.set("oranges", 1000)
myHashTable.set("condoms", 50)
console.log(myHashTable.get("condoms"))
myHashTable._hash("grapes")
console.log(myHashTable.keys())
console.log(myHashTable);