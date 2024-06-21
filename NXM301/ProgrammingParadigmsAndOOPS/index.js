

// name, gender, aadhar_id, age
class Person{
    constructor (name,gender,aadhar_id,age){
        this.name = name;
        this.gender = gender;
        this.aadhar_id = aadhar_id;
        this.age = age;
    }

    // adding a  method

    isMarriageable(){
        if (this.age < 21 ) return false;
        return true;
    }

}


const p =new Person("a","M",1,20);

console.log(p) //Person { name: 'a', gender: 'M', aadhar_id: 1, age: 20 }
console.log(p.isMarriageable()) // false

