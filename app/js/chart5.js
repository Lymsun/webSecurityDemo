/**
 * Created by lymsu on 2017/4/25.
 */

$(function ($) {
    var chart5 = echarts.init(document.getElementById('chart5'));

    var xData = ['北京', '上海', '广州', '天津', '深圳'];
    var yData = [29, 19, 17, 6, 5];

    chart5.showLoading();

    var opinion = {
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            type: 'category',
            data: xData,
            boundaryGap : false,
            axisLabel: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        visualMap: {
            show: false,
            pieces: [{
                gt: 0,
                lte: 6,
                color: '#096'
            }, {
                gt: 6,
                lte: 12,
                color: '#ffde33'
            }, {
                gt: 12,
                lte: 16,
                color: '#ff9933'
            }, {
                gt: 16,
                lte: 22,
                color: '#cc0033'
            }, {
                gt: 22,
                lte: 30,
                color: '#660099'
            }, {
                gt: 30,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            type: 'line',
            animation: true,
            symbolSize: '16',
            lineStyle: {
                normal: {
                    width: 5
                }
            },
            label: {
                normal: {
                    show: true,
                    offset: [20, 10],
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#aaa'
                        }, {
                            offset: 1, color: '#fff'
                        }]
                    }
                }
            },
            data: yData
        }
    };

    chart5.hideLoading();
    chart5.setOption(opinion);
})(jQuery);