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
        bbTags["ul"] = new BBTag("ul", true, false, false);
        bbTags["ol"] = new BBTag("ol", true, false, false);
        bbTags["li"] = new BBTag("li", true, false, false);

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
            return "<pre>" + content + "</pre>";
        });

        bbTags["img"] = new BBTag("img", true, false, false, function (tag, content, attr) {
            var width = attr["width"];
            var height = attr["height"];

            if (width != undefined) {
                width = escapeHTML(width);
            }

            if (height != undefined) {
                height = escapeHTML(height);
            }

            if (width != undefined && height != undefined) {
                return "<img width=\"" + width + "\" height=\"" + height + "\" src=\"" + content + "\" />";
            } else if (width != undefined) {
                return "<img width=\"" + width + "\" src=\"" + content + "\" />";
            } else if (height != undefined) {
                return "<img height=\"" + height + "\" src=\"" + content + "\" />";
            } else {
                return "<img src=\"" + content + "\" />";
            }
        });

        bbTags["url"] = new BBTag("url", true, false, false, function (tag, content, attr) {
            console.log(attr);
            console.log(content);
            var link = content;

            if (attr["url"] != undefined) {
                link = escapeHTML(attr["url"]);
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
