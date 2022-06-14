(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
   
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
      .then(array => {
       console.log(array)
       //var zmienna = "";
      //for(var i=0;i<=array.length;i++){
      //zmienna += var div=document.createElement("div");
         answer.innerHTML =JSON.stringify(array)[0].id+'</br>'+
        JSON.stringify(array)[0].userId+'</br>'+
        JSON.stringify(array)[0].title+'</br>'+
        JSON.stringify(array)[0].body+'</br>';
        }
        //answer.innerHTML = zmienna;
      })
    
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
