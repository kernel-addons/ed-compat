export default new class Logger
    log: (module, ...message) ->
        if module then console.log "%c[EnhancedDiscord] %c[#{module}]", "color: red", "color: #{this.color}", ...message;
        else console.log "%c[EnhancedDiscord]", "color: red;", ...message;

    info: (module, ...message) ->
        if module then console.info "%c[EnhancedDiscord] %c[#{module}]", "color: red", "color: #{this.color}", ...message;
        else console.info "%c[EnhancedDiscord]", "color: red;", ...message;

    warn: (module, ...message) ->
        if module then console.warn "%c[EnhancedDiscord] %c[#{module}]", "color: red", "color: #{this.color}", ...message;
        else console.warn "%c[EnhancedDiscord]", "color: red;", ...message;

    error: (module, ...message) ->
        if module then console.error "%c[EnhancedDiscord] %c[#{module}]", "color: red", "color: #{this.color}", ...message;
        else console.error "%c[EnhancedDiscord]", "color: red;", ...message;