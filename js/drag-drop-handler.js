
function drop_element (event, ui, dropZone) {
    var dragged = $(ui.helper).clone(false)
        .removeClass('ui-draggable-dragging')
        .css({position:'absolute', left:0, top:ui.offset.top - 12});
    dragged.attr("style", "");
    $(dropZone).removeClass("first-column-dropZone")
    $(dropZone).after(create_drop_zone());
    $(dropZone).after(dragged);
    make_droppable($(".dropZone"));
    add_remove_(".remove");
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