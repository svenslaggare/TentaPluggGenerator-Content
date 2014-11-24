//The parser settings
var ParserSettings = (function () {
    function ParserSettings() {
    }
    //Returns the default tags
    ParserSettings.defaultTags = function () {
        var bbTags = new Array();

        //Simple tags
        bbTags["b"] = new BBTag("b", true, false, false);
        bbTags["i"] = new BBTag("i", true, false, false);
        bbTags["u"] = new BBTag("u", true, false, false);

        bbTags["math"] = new BBTag("math", false, false, true, function (tag, content, attr) {
            return "`" + content + "`";
        });

        bbTags["latex"] = new BBTag("latex", true, false, true, function (tag, content, attr) {
            return content;
        });

        bbTags["text"] = new BBTag("text", true, false, true, function (tag, content, attr) {
            return content;
        });

        bbTags["block"] = new BBTag("block", true, false, true, function (tag, content, attr) {
            return "<blockTag>" + content + "</blockTag>";
        });

        bbTags["img"] = new BBTag("img", true, false, false, function (tag, content, attr) {
            return "<img src=\"" + content + "\" />";
        });

        bbTags["url"] = new BBTag("url", true, false, false, function (tag, content, attr) {
            var link = content;

            if (attr["url"] != undefined) {
                link = escapeHTML(link);
            }

            if (!startsWith(link, "http://") && !startsWith(link, "https://")) {
                link = "http://" + link;
            }

            return "<a href=\"" + link + "\" target=\"_blank\">" + content + "</a>";
        });

        return bbTags;
    };
    return ParserSettings;
})();
