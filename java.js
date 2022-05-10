// movies images
var imagesArray = [
    "sources/0.png", // represents val 0,
    "sources/1.png", // 1,
    "sources/2.png",  // 2 ...
    "sources/3.jpg",
    "sources/4_Transparent.png"
  ];

//display movies images by selector

  $('#movies').change(function(){
    $('#image')[0].src = imagesArray[this.value];
  });


  function total(){
    var input=document.getElementsByName("seat");
    var sum=0;
    var s=0
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        sum += parseFloat(input[i].value);
        s++;
      }
    }
    document.getElementById("sum").value = "TND " + sum.toFixed(3);
    document.getElementById("seatNBR").value =  s;

  }
  
