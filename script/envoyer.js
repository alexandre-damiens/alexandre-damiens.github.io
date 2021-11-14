$(document).ready(function(){
$(".send-btn").click(function(){
$(".contact-form").attr('action','mailto:alex.dams76@gmail.com?subject='+$('#sjt').val()+'&body='+$("#message").val());
/*après remplissage du formulaire la totalité des éléments seront utilisés pour l'envoie d'un mail*/
});
});
