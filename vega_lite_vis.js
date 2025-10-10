var vg1 = "js/map.vg.json";
var vg2 = "js/gbar.vg.json";

let vg1View = null;
let vg2View = null;

document.addEventListener('DOMContentLoaded', function() {
    function renderCharts(year) {
        if (!vg1View) {
            vegaEmbed("#vg1", vg1, { actions: false })
                .then(result => {
                    vg1View = result.view;
                    vg1View.signal('YearSelection', year).runAsync();
                })
        } else {
            vg1View.signal('YearSelection', year).runAsync();
        }
        if (!vg2View) {
            vegaEmbed("#vg2", vg2, { actions: false })
                .then(result => {
                    vg2View = result.view;
                    vg2View.signal('YearSelection', year).runAsync();
                })
        } else {
            vg2View.signal('YearSelection', year).runAsync();
        }
    }

    renderCharts(2014);

    document.getElementById('year-select').addEventListener('change', function() {
        const selectedYear = parseInt(this.value);
        renderCharts(selectedYear);
    });
});