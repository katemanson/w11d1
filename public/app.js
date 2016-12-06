var catArray = [
  {
    liOneText: "Name: Boba",
    liTwoText: "Favourite food: Sock fluff",
    imgWidth: "500",
    imgSrc: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
  },
{
    liOneText: "Name: Barnaby",
    liTwoText: "Favourite food: Tuna",
    imgWidth: "500",
    imgSrc: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"
  },
{
    liOneText: "Name: Max",
    liTwoText: "Favourite food: Whiskas Temptations",
    imgWidth: "500",
    imgSrc: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
  },
{
    liOneText: "Name: George",
    liTwoText: "Favourite food: Cheese",
    imgWidth: "500",
    imgSrc: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
  }
];



var createCatUl = function(){
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
};

var createLi = function(liText){
  var li = document.createElement('li');
  li.innerText = liText;
  return li;
};

var createImg = function(imgWidth, imgSrc){
  var img = document.createElement('img');
  img.width = imgWidth;
  img.src = imgSrc;
  return img;
};

var addCat = function(liOneText, liTwoText, imgWidth, imgSrc){
  var catUl = createCatUl();
  var liOne = createLi(liOneText);
  var liTwo = createLi(liTwoText);
  var img = createImg(imgWidth, imgSrc);

  catUl.appendChild(liOne);
  catUl.appendChild(liTwo);
  catUl.appendChild(img);

  var cats = document.querySelector('#cats');
  cats.append(catUl);
};

window.onload = function() {

  for (var i = 0; i < catArray.length; i++) {
    addCat(catArray[i].liOneText, catArray[i].liTwoText, catArray[i].imgWidth, catArray[i].imgSrc);
  };

};
