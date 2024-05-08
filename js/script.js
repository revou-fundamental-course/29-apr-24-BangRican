function validation() {
    let username = document.getElementById('name').value;
}

document.getElementById('send-btn').addEventListener('click',() => validation())

let indexSlide = 1; //[0,1,2,3,4]
showSlide(1);

function nextSlide(n) {
    console.log('nextSlide' + n);
    showSlide(indexSlide += n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName('image')
    console.log(listImage);
    console.log("banyaknya image: " + listImage.length);

    if (index > listImage.length) indexSlide = 1;
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    listImage[indexSlide - 1].style.display = 'block';

    console.log('showSlide' + index);

}

setInterval(() => nextSlide(1), 2000);
