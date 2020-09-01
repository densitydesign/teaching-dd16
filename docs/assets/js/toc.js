let title = [];
let link = [];

d3.selectAll("h1").each(function(i) {
  title.push(d3.select(this).text());
  link.push(d3.select(this).attr("id"))
  // CREARE UN ARRAY PER RIGA CON DENTRO TITOLO E LINK.
});

let merge = (a1, a2) => title.map((n, i) => ({title: n, link: link[i]}));

let table = merge(title,link);

console.log(table);

d3.selectAll("#table--of--content").append("div").selectAll("text")
.data(table)
.enter()
.append("a")
  .attr("href", function(d) {
    return "#" + d.link;
  })
.append("p")
.text(function(d) {
  return d.title;
});

d3.select("#table--of--content a").classed("active", true)

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var offset = $("header").height();

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 400;
    $('#table--of--content a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#table--of--content a').removeClass("active");
            currLink.addClass("active");
        }
        // else{
        //     currLink.removeClass("active");
        // }
    });
}

// Mobile

$(".drawer--button").click(function() {
  $("#syllabus--aside").toggle();
});

if (screen.width < 960) {
$("#table--of--content a").click(function() {
  $("#syllabus--aside").toggle();
})
}
