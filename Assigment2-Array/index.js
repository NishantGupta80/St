const  Emp = [
    {
       EmpName : " Arpit Jain",
       EmpID: 1068
    },
     {
       EmpName : " Samuel  Bond",
       EmpID: 1079
    },
    {
       EmpName : " Rishabh  Garg",
       EmpID: 1080
    },
  ]      


  function main(input,id)
  {
    let index = input.find((el,ind) => el.EmpID === id);
    //console.log(ind);
    return index ? index.EmpName : -1;
  }

  console.log(main(Emp,1068));

  function shortName(input) {
    let arr = input.map(el => {
        let name = el.EmpName.trim().split(" ");
        console.log(name);

        let first = name[0][0];
        let last;

        if (name.length === 1) {
            // If there's only one name, just use the first letter
            last = '';
        } else if (name.length >= 2) {
            // Handle the possibility of extra spaces or middle names
            last = name[name.length - 1][0];
        }

        return first.toUpperCase() + last.toUpperCase();
    });

    return arr;
}

console.log(shortName(Emp));