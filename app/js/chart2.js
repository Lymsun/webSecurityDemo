/**
 * Created by lymsu on 2017/4/25.
 */

(function ($) {
    var chart2 = echarts.init(document.getElementById('chart2'));

    chart2.showLoading();

    var opinion = {
        backgroundColor: '#2c343c',
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#fff'
                },
                emphasis: {
                    borderColor: '#b1e4ff'
                }
            },
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {d}%"
        },
        visualMap: {
            show: false,
            pieces: [{
                gt: 0,
                lte: 1,
                color: '#C1232B'
            }, {
                gt: 1,
                lte: 5,
                color: '#B5C334'
            }, {
                gt: 5,
                lte: 25,
                color: '#9BCA63'
            }, {
                gt: 25,
                lte: 36,
                color: '#FAD860'
            }, {
                gt: 36,
                color: '#60C0DD'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: [
            {
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 39, name: 'Mysql'},
                    {value: 36, name: 'SQL server'},
                    {value: 22, name: 'Oracle'},
                    {value: 2, name: 'Postgresql'},
                    {value: 1, name: 'IBM DB2'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 20
                        },
                        formatter: "{b} : {d}%"
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#fff'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut'
            }
        ]
    };

    chart2.hideLoading();
    chart2.setOption(opinion);
})(jQuery);