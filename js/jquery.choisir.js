/**
 * @plugin  jquery.choisir.js
 * @verison v1
 * @desc    management d'une lotterie graphiquement
 * @author  Sebastien_G
 * @mail    sebastien.gestiere@gmail.com
 * @github  
 */


$(document).ready(function() {
  
  base('{"base":["base2","base1"], "description":["Base 2","Base 1"]}'); //init with json
  

  /* <>Setting cool<> */
  //target to image
  $target_lottery = $('#lotbox');
  //target to bouton image
  $target_boutonlottery = $('.lottery');
  //modal panel final
  $target_modalfinal = $('#modalfinal'); 
  //Name of the winner in this modal 
  $target_name = $('#name');
  //target validation to base in this modal 
  $target_validation = $('#okbro');
  //target photofinish in this modal 
  $target_endphoto = $('#endphoto');
  //bouton to change mode of base
  $target_changemode = $('#followingmode');
  //bouton to go to backstage
  $target_backstage = $('#backstage');
  //modal of backstage Ajax
  $target_modalbackstage = $('#modalbackstage');
  //Content of this modal 
  $target_contentbackstage = $('#contentbackstage');


  
  

  // on initialise 
  var arrayProcess_img = $.parseJSON('{"frap": 20, "process_img" : ["exemple/1.jpg","exemple/2.jpg"]}');

    

    // initialisation variable tableau [id][nom][prenom][url]
    var data_json;
    var list_base;
    var the_base;


    function checkHash(){
      if (document.location.hash != "") {
        the_base = document.location.hash.replace("#","").toString();
      }

    }    


    function base(option){

      if (option == "SQL") {
        $.get("php/base.php").done(function(data)
          {
            list_base = $.parseJSON(data);

            the_base = list_base.base[1].toString();

            //mettre a jour une premiere fois les bases pour quelle affiche les images 
            checkHash();
            updateJSON();

          });    
      }else{
            
            list_base = $.parseJSON(option);
            the_base = list_base.base[1].toString();

            checkHash();
            updateJSON();

      }


      for (var i=0; i<list_base.base.length; i++) {
        var the_li = '<li><a class="mode_change" href="#'+list_base.base[i].toString()+'">'+list_base.description[i].toString()+'</a></li>';
        $('#followingmode').append(the_li);
        //$target_changemode.append(the_li);
      }


    }
    
    //permet de passer d'un mode à un autre 
    $('.mode_change').click(function() {
      the_base = $(this).attr('href').replace("#","").toString();
      updateJSON();
    });



    //fonction principale 
    $target_boutonlottery.click(function() {

         $.get("php/json.php",{base: the_base}).done(function(data)
            {
                data_json = $.parseJSON(data);
                var longeur = (data_json['id'].length);
                var nbAlea = Math.round(Math.random()*(longeur-1));
                $target_name.text( data_json['firstname'][nbAlea] +" " + data_json['lastname'][nbAlea] );
                $target_endphoto.attr('src',data_json['url'][nbAlea]);
                $.lotteryStart(nbAlea, function() {
                    $target_modalfinal.modal('show');
                });

                $target_validation.click(function() {
                    eject(the_base,data_json['id'][nbAlea]);
                    updateJSON(); 
                    $target_modalfinal.modal('hide'); 
                });
            });               
    });
    



    $target_backstage.click(function() {
        $.get("php/backstage.php",{base: the_base}).done(function(data)
            {
                $target_modalbackstage.modal('show');
                $target_contentbackstage.html(data);
            });
    });




  function updateJSON(){
    $.get("php/json.php",{base: the_base}).done(function(data)
        {
            
            //console.log(data);
            data_json = $.parseJSON(data);
            arrayProcess_img['process_img'] = data_json['url'];
            $target_lottery.lotteryInit(arrayProcess_img);
        });
  };


  function eject(the_base,the_id){
    $.get("php/eject.php",{base: the_base,id: the_id})
  }


});
