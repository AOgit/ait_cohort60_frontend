// Task 1
const house = {
    adress: "Pfondorfer str 69",
    postIndex: 10408,
    roofColor: "red",
    wallColor: "green",
  };

  const {adress, wallColor} = house;
  console.log(adress, " | ", wallColor);

  // Task 2
  const array = ["un", "body", "thing", "way"];
  function addPrefix(array, prefix) {
        let newArray = [];
        for(let item of array) 
        {
          newArray.push(prefix.concat(item));
        }
        return newArray;
  }
  console.log(addPrefix(array, "no")); // [ 'noun', 'nobody', 'nothing', 'noway' ]

  // Task 3
  function gardender(action, thing) {
    return action(thing);
  }
  
 const watering = (plant) => "I water the " + plant;

 console.log(gardender(watering, "rose"));

 const planting = (tree) => "I plant a " + tree;

 console.log(gardender(planting, "mapple"));

 function digging(thing) {return "I dig a " + thing;}
 
 console.log(gardender(digging, "garden"));
 
  

  

  

  

  

  

  

  


