//sélectionner des éléments requis
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //après le chargement de la fenêtre
  filterItem.onclick = (selectedItem)=>{ //si l'utilisateur clique il y a une filtration
    if(selectedItem.target.classList.contains("item")){
      filterItem.querySelector(".active").classList.remove("active"); //changement de la classe active 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //récupération de la classe d'image
        
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show");
        }else{
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //ajout de l'attribut onclick dans toutes les images disponibles
  }
}

//fonction de prévisualisation des images en plein écran
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //lorsque l'utilisateur clique sur une image, la barre de défilement du corps est supprimée, l'utilisateur ne peut pas faire défiler l'image.
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //obtenir le lien source de l'image cliquée et le stocker dans une variable.
  let selectedImgCategory = element.getAttribute("data-name"); //récupération de la valeur de l'image (data-name)
  let selectedTextImgCategory = element.getAttribute("text"); //récupération de la valeur de l'image (text)
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory+selectedTextImgCategory; 
  previewBox.classList.add("show"); //afficher la boîte de l'image de prévisualisation
  shadow.classList.add("show"); 
  closeIcon.onclick = ()=>{ //fermeture boite de prévisualisation
    previewBox.classList.remove("show"); 
    shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "auto"; 
  }
}
