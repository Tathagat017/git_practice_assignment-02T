function prime(number) {

	let factors = 0;

	for (let i = 1; i <= number; i++) {
		if (number % i == 0) { factors++; }
	}
	factors > 2 ? console.log("Not Prime ") : console.log("Yes Prime");

}

console.log(prime(50));