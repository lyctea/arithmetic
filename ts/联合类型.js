/**
 * 希望属性是多种类型之一，使用 | 作为标记
 * @param command
 */
function formatCommandline(command) {
    var line = "";
    if (typeof command === "string") {
        line = command.trim();
    }
    else {
        line = command.join(" ").trim();
    }
    // Do stuff with line: string
}
