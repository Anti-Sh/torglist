$(function(){
    var typesSelected = [];
    var RegionsSelected = [];
    var MarketsSelected = [];
    var CostFromClear = [];
    var CostToClear = [];

    $("div.type").on("click", (e) =>{
        let item = $(e.currentTarget);
        let typeId = Number(item[0].id.slice(4));
        let className = "selected";
        console.log();
        if(item.hasClass(className)){
            item.removeClass(className);
            typesSelected.splice(typesSelected.findIndex((el) => el == typeId), 1);
        } else{
            item.addClass(className);
            typesSelected.push(typeId)
        }
        console.log(typesSelected);
    })

    $('select[name="regions"]').on("change", (e) =>{
        let item = e.currentTarget;
        RegionsSelected = [];
        for (var i = 0; i < item.options.length; i ++) {
            if (item.options[i].selected) 
                RegionsSelected.push(item.options[i].value);
        }
    })

    $('select[name="markets"]').on("change", (e) =>{
        let item = e.currentTarget;
        MarketsSelected = [];
        for (var i = 0; i < item.options.length; i ++) {
            if (item.options[i].selected) 
                MarketsSelected.push(item.options[i].value);
        }
    })

    $('.result').on("click", (e) => {
        let item = e.currentTarget;
        $(".item_detailed").fadeToggle();
    })

    $('body').on("click", ".item_detailed", (e) => {
        $(".item_detailed").fadeToggle();
    })
    $('body').on("click", ".item_detailed .item", (e) => {
        e.preventDefault();
        e.stopPropagation();
    })
});