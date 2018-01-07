/**
 * 这个模块注册一个可在页面加载完成后自动运行的匿名函数。当这个函数执行时会在文档中查找ID为 “TOC” 的元素，如果元素不存在在会创建一个元素。
 * 
 * 生成的TOC目录应该具有自己的CSS样式，整个目录区域样式className设置为 “TOCEntry”
 * 同样我们为不同层级的目录标题定义不同的样式。<h1> 标签生成标题
 * 。。。
 */

onload(function () {
    // 查找TOC，不存在则创建
    var toc = document.getElementById("TOC")
    if(!toc) {
        toc = document.createElement("div")
        toc.id = "TOC"
        document.body.insertBefore(toc, document.body.firstChild)
    }

    // 查找所有的标题元素
    var headings
    if(document.querySelectorAll)   // 判断此方法是否可用
        headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    else    headings = findHeadings(document.body, [])

    // 递归遍历Document的body
    function findHeadings(root, sects) {
        for(var c = root.firstChild; c != null; c = c.nextSibling) {
            if(c.nodeType !== 1) continue
            if (c.tagName.length == 2 && c.tagName.charAt(0) == "H")
                sects.push(c)
            else   
                findHeadings(c, sects)
        }
    }

    // 初始化一个数组来保存跟踪章节字号
    var sectionNumbers = [0,0,0,0,0,0]

    // 循环已找到的标题元素
    for(var h = 0; h < headings.length; h++){
        var heading = headings[h]

        if(headings.parentNode == toc) continue

        var level = parseInt(heading.tagName.charAt(1))
        if(isNaN(level) || level < 1 || level > 6)continue

        sectionNumbers[level-1]++

        for(var i = level; i < 6; i++) sectionNumbers[i] = 0

        var sectionNumber = sectionNumbers.slice(0,level).join('.')

        var span = document.createElement("a")
        span.className = "TOCSectNum"
        span.innerHTML = sectionNumber
        heading.insertBefore(span, heading.firstChild,)

        var anchor = document.createElement("a")
        anchor.nam = "TOC" + sectionNumber
        heading.parentNode.insertBefore(anchor, heading)
        anchor.appendChild(heading)

        var link = document.createElement("a")
        link.href = "#TOC" + sectionNumber
        link.innerHTML = heading.innerHTML

        var entry = document.createElement("div")
        entry.className = "TOCEntr TOCLevel" + level
        entry.appendChild(link)

        toc.appendChild(entry)


    }
    
})