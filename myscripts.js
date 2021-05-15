var friends = new Array ()
    friends[0]   = "Fadi";
    friends[1]   = "john";
    friends[2]   = "sam" ;
    friends[3]   = "jess";
var i;
for (i = 0; i < friends.length; i = i + 1){
    if (friends[i].indexOf("j")) {
        console.log("Hello " + friends[i]); 
    }    else {
            console.log("Goodbye " + friends[i]);
        };
    };