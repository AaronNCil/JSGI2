    
    
  function studentInfo() {


    alert("Enter first students information ");
    let fName1 = prompt("What is your first name? ");
    let lName1 = prompt("what is your last name? ");
    let age1 = prompt("How old are you? ");

    alert("Enter second students information ");
    let fName2 = prompt("What is your first name? ");
    let lName2 = prompt("what is your last name? ");
    let age2 = prompt("How old are you? ");

    alert("Enter Third students information ");
    let fName3 = prompt("What is your first name? ");
    let lName3 = prompt("what is your last name? ");
    let age3 = prompt("How old are you? ");

    
    const studentArray1 = [lName1, fName1, age1];
    const studentArray2 = [lName2, fName2, age2];
    const studentArray3 = [lName3, fName3, age3];


    console.log(`Hi my name is ${studentArray2[1]} ${studentArray2[0]} and I am ${studentArray2[2]} years old.`);
  }