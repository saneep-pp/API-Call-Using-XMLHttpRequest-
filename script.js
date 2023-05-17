const requestData = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users/");
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status === 200) {
      jsonObject = JSON.parse(request.response);
      console.log(jsonObject);

      jsonObject.map(
        (getname = (item, ind) => {
          // console.log(item.name);
          return (document.getElementById("demo").innerHTML +=
            item.name + "\n");
        })
      );
      //Below Code is example of using for loop to get data
      // len=jsonObject.length;
      // for(let i=0;i<len;i++){
      //     document.getElementById("demo").innerHTML+=jsonObject[i].name+"<br/> ";
      //     console.log(jsonObject[i].name)
      // }
    } else {
      console.log(`Error in ${request.status}`);
    }
  };
};
