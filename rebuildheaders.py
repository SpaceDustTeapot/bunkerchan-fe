boards = open("templates/content/navBoardSpan.html").read().replace("\n","").replace("\r","")
links = open("templates/content/navLinkSpan.html").read().replace("\n","").replace("\r","")

generalheaderout = open("templates/content/generalHeader.html", 'w')
generalheaderout.write(links)
generalheaderout.write(boards)

generalheaderout = open("templates/content/boardHeader.html", 'w')
generalheaderout.write(links)
generalheaderout.write(boards)
generalheaderout.write("""<span id="navOptionsSpan"> <span>[</span>
      <a
        href="#"
        class="coloredIcon"
        id="linkTop"></a> <span>/</span> <a
        href="#footer"
        class="coloredIcon"
        id="linkBottom"></a> <span>/</span> <a
        href="catalog.html"
        class="coloredIcon"
        id="navCatalog"></a> <span>/</span> <a
        href="index.rss"
        class="coloredIcon"
        id="linkRss"></a> <span>]</span>
    </span>""")

generalheaderout = open("templates/content/threadHeader.html", 'w')
generalheaderout.write(links)
generalheaderout.write(boards)
generalheaderout.write("""<span id="navOptionsSpan"> <span>[</span>
      <a
        href=".."
        id="linkBack"
        class="coloredIcon"></a> <span>/</span> <a
        href="#bannerImage"
        id="linkTop"
        class="coloredIcon"></a> <span>/</span> <a
        href="#footer"
        id="linkBottom"
        class="coloredIcon"></a> <span>/</span> <a
        href="../catalog.html"
        id="navCatalog"
        class="coloredIcon"></a> <span>]</span>
    </span>""")