const dropDownNavigation = document.querySelector('.nav-links');

// dropDownNavigation.forEach((item, index) =>{
//     const feature = item.querySelector('.features-nav');
//     // const company = item.querySelector('.company-nav');
    const rotateElement = item.querySelector('.arrow');

dropDownNavigation.addEventListener('click', dropDown);
function dropDown (e){
    e.preventDefault ();
    item.classList.toggle('open');
    rotateElement.classList.toggle('rotate');

    if(
        item.classList.contains('open')){
        const featureContents = item.querySelector('.features-contents');
        // const companyContents = item.querySelector('.company-contents');

        featureContents.style.height =`${featureContents.scrollHeight}px`;
        // companyContents.style.height =`${companyContents.scrollHeight}px`;
    }
    else{
        featureContents.style.height = '0px';
        // companyContents.style.height = '0px';
    }
}
// });