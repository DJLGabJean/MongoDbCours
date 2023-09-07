db = db.getSiblingDB("NoSQL");
db.getCollection("publis").find({});


// Question 1

//db.publis.find({"type" : "Book"});

// Question 2 

//db.publis.find({"year" : {$gte : 2011} });

// Question 3

//db.publis.find({"type" : "Book", "year" : {$gte : 2014} });

// Question 4

//db.publis.find({"authors" : "Toru Ishida"});
//ou
// //db.publis.find({"authors" : {$in : ["Toru Ishida"]} });

// Question 5

//db.publis.distinct({"publisher"});

// Question 6

//db.publis.distinct({"authors"})










