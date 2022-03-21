export default new class DOM 
    elments: new Map();

    constructor: ->
        @head = @createElement "ed-head";

    createElement: (type, options) ->
        node = document.createElement type;

        Object.assign(node, options);

    injectCSS: (id, css) ->
        if @elements.has id then throw new Error "Element with id #{id} already exists!";

        style = @createElement "style", {id, textContent: css};

        @head.appendChild style;
        @elements.set id, style;

        return;

    clearCSS: (id) ->
        if not @elements.has id then throw new Error "Element with id #{id} does not exist!";
        element = @elements.get id;

        element.remove();
        @elements.delete id;

        return;