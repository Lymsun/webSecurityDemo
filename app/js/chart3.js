/**
 * Created by lymsu on 2017/4/25.
 */

(function ($) {
    var chart3 = echarts.init(document.getElementById('chart3'));

    chart3.showLoading();

    var opinion = {};

    chart3.hideLoading();
    chart3.setOption(opinion);
})(jQuery);