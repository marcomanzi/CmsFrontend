function remove_element () {
    internal_remove($(this).parent());
}

function internal_remove(toRemove) {
    var currEleIdx = toRemove.index();
    $(toRemove).parent().children().get(currEleIdx + 1).remove();
    toRemove.remove();
}

function add_remove_row_behaviour () {
    $(".remove").parent().click(function () {
        internal_remove($(this).parent().parent().parent());
    });
}

function drop_element (event, ui, dropZone) {
    var row_container = $("<div class='row container'></div>");
    var dragged = $(ui.helper).clone(false)
        .removeClass('ui-draggable-dragging')
        .css({width: "auto"}).removeAttr("auto");
    dragged.attr("style", "");
    row_container.append(dragged);
    $(dropZone).removeClass("first-column-dropZone")
    $(dropZone).after(create_drop_zone());
    $(dropZone).after(row_container);
    make_droppable($(".dropZone"));
    add_remove_row_behaviour();
}

function make_draggable(element, helperHtml) {
    $(element).draggable({
        cursor: "move",
        cursorAt: { top: 30 },
        helper: function(event) {
            return $(helperHtml);
        }
    });
}

function make_droppable(element) {
    $(element).droppable({
        hoverClass: "drop-area",
        drop: function (event, ui) {
            drop_element(event, ui, this);
        }
    });
}

function create_drop_zone() {
    return $('<div class="dropZone"></div>')
}

function create_inside_column_drop_zone () {
    return $('<div class="dropZone first-column-dropZone"></div>')
}