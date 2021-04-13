let previewTable = document.getElementById('preview-table');
function genHtmlTable(contentList) {
    let table = "";
    contentList.forEach((e, index) => {
        table += `<tr><td>headline${index}</td><td>${e}</td></tr>`;
    });
    return table;
}
export function previewData(contentList) {
    if (!previewTable) {
        throw new Error("couldn't find 'app' element");
    }
    previewTable.innerHTML = genHtmlTable(contentList);
    console.log(previewTable.innerHTML);
}
