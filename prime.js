function prime( number )
{

let count = 0;
for ( let i=1;i<=number;i++)
{
    if(number%i==0){ count++; }
}
count==2?console.log("Yes Prime "): console.log("Not Prime");

}

console.log(prime(50));