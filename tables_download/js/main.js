
$(document).ready(function () {
//If a table has more than 3 tds show visual scroll cue

	$("table.responsive").each(function () {
    if ($("td", this).length > 3) {
        $(this).before("<div style='position:relative;'><span class='MobiScroll'></span></div>");
    	}
	});

//Zurb respnosive plugin code

    var switched = false;
    var updateTables = function () {
        if (($(window).width() < 767) && !switched) {
            switched = true;
            $("table.responsive").each(function (i, element) {
                splitTable($(element));
            });
            return true;
        } else if (switched && ($(window).width() > 767)) {
            switched = false;
            $("table.responsive").each(function (i, element) {
                unsplitTable($(element));
            });
        }
    };

    $(window).load(updateTables);
    $(window).bind("resize", updateTables);


    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");

        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        //copy.removeClass("responsive");
        //original.closest(".table-wrapper").append(copy);
        //copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }

});

