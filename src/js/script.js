$(function(){
    var typesSelected = [];
    var isRegionsClear = true;
    var isMarketsClear = true;
    var isCostFromClear = true;
    var isCostToClear = true;

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
        let item = $(e.currentTarget);
        console.log(item);
    })
});