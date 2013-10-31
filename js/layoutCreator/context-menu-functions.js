function init_element_context_menu() {
    $('.work-space').contextMenu({
        selector: '.element',
        trigger: 'left',
        items: {
            "position": {
                "name": "Position",
                "items": {
                    "Right": { "name": "Right", callback: pull_right},
                    "Center": {"name": "Center", callback: center},
                    "Left": {"name": "Left", callback: pull_left}
                }
            },
            "remove": {
                name: "Remove",
                icon: "page_white_delete",
                callback: remove_element
            }
        }
    });

}