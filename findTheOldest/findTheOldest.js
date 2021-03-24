function compareAge(firstPerson, secondPerson) {
    return firstPerson.age > secondPerson.age ? -1 : 1;
}

function findTheOldest(people) {

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;

    }

    people.sort(compareAge);
    return people[0];

}

module.exports = findTheOldest
