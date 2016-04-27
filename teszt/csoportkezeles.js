
function tanuloListaBetolt() {
    
    var data = $("form#ujcsoport").serialize();
    var tanulok = $('select[name="tanulok[]"]');
    
    $.ajax({
			url: "classes/process.php?props=csoportListaTanulo&processajax",
			type: 'POST',
			data: data,
			async: true,
    }).done(function(e) {
        
        console.log(e);
        if(e != "sajt") {
            
            tanulok.html('');
            tanulok.material_select('destroy');
            tanulok.removeAttr("disabled");
            
            tanulok.append(e);
            tanulok.material_select();
        } else {
            tanulok.html('');
            tanulok.material_select('destroy');
            tanulok.attr("disabled", true);
            tanulok.append('<option disabled>Válaszd ki a tanulókat</option>');
            tanulok.material_select();
        }
        
        
    }).fail(function(e) {
        alert("valami nem oké!");
    });
}
