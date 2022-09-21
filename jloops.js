//for loop
for(let i=1;i<=100;i++){

    if(i % 2 == 0 && i % 3 == 0) 
        console.log("FooBaz");
    
    else if(i % 3 == 0) 
        console.log("Baz");
    
    else if(i % 2 == 0) 
        console.log("Foo");
    
    else
        console.log(i);
    
} 
