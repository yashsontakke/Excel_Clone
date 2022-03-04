$(document).ready(function () {
    let cellContainer = $(".column-name-container");
    let rowContainer = $(".row-name-container");

    for (let j = 1; j <= 100; j++) {
      
        let ans = "";
        let n = j;
        if (n == 1) {
            ans = "A";
        } else {
            var result = "";
            while (n > 1) {
                cal = n - 1;
                result = String.fromCharCode(65 + cal % 26) + result;
                n = cal / 26;
            }
            ans = result;
        }
        let column = $(`<div class="column-name colId-${j}" id="colCod-${ans}">${ans}</div>`);
        $(cellContainer).append(column);
        let row = $(`<div class="row-name" id="rowId-${j}">${j}</div>`);
        $(rowContainer).append(row);
    }

    let target = $(".column-name-container")[0];
    let rowTarget = $(".row-name-container")[0]
    $(".input-cell-container").scroll(function () {
        target.scrollLeft = this.scrollLeft;
        rowTarget.scrollTop = this.scrollTop;
        
    });
    let target2 = $(".input-cell-container")[0];
    $(".column-name-container").scroll(function () {
        target2.scrollLeft = this.scrollLeft;
    });
    $(".row-name-container").scroll(function () {
        target2.scrollTop = this.scrollTop;
    });

    for (let i = 1; i <= 100; i++) {
        let row = $(`<div class="cell-row"></div>`);
        for (let j = 1; j <= 100; j++) {
            let colCode = $(`.colId-${j}`).attr("id")+"";
            colCode = colCode.slice(7);
            let column = $(`<div class="input-cell" contenteditable="false" id = "row-${i}-col-${j}" data="code-${colCode}"></div>`);
            row.append(column);
        }
        $(".input-cell-container").append(row);
    }
    $(".align-icon").click(function () {
        $(".align-icon.selected").removeClass("selected");
        $(this).addClass("selected");
    });
    $(".style-icon").click(function () {
        this.toggleClass("selected");
    })
    $(".input-cell").click(function () {
        $(".input-cell.selected").removeClass("selected");
        $(this).addClass("selected");
    })
});




