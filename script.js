//Random Name Generator

//Generates a random number between 0 and 1 times the amount of num.
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

//An object to hold the three sets of data which will get outputted to the user.
const names = {
    surName: ['Joe', 'Jack', 'Nick', 'Hank', 'Randy'],
    middleName: ['George', 'Alan', 'Michael', 'James', 'Peter'],
    lastName: ['Johnson', 'Smith', 'Jackson', 'Lawrence', 'Baker']
};

//Store the generated full name.
let fullName = [];

//Iterate over the object.
for (let name in names) {
    let option = generateRandomNumber(names[name].length);

//Iterate through each set of data,
    switch (name) {
        case 'surName':
            fullName.push(`${names[name][option]}`)
            break
        
        case 'middleName':
            fullName.push(`${names[name][option]}`)
            break
        
        case 'lastName':
            fullName.push(`${names[name][option]}`)
            break

//Set a default in case of error.
        default:
            fullName.push(`Error`)
    }
};

//Format the text to have spaces in-between the names.
function formatted(generatedName) {
    const format = fullName.join(' ');
    console.log(format);
}

//Run the formatted name with random generation.
formatted(fullName);