function pull_right() {
    remove_position_class(this);
    $(this).addClass("pull-right")
}

function pull_left() {
    remove_position_class(this);
    $(this).addClass("pull-left")
}

function center() {
    remove_position_class(this);
    $(this).addClass("text-center")
}

function remove_position_class(el) {
    $(el).removeClass("pull-right").removeClass("pull-left").removeClass("text-center");
}
