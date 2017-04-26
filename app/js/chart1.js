/**
 * Created by lymsu on 2017/4/25.
 */

(function ($) {
    var chart1 = echarts.init(document.getElementById('chart1'));

    var xData = ['应用程序自身漏洞', '网页自身漏洞', '操作系统漏洞', '网络设备漏洞', '安全产品漏洞'];
    var yData = [45, 28, 13, 11, 3];

    chart1.showLoading();

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
        visualMap: {
            show: false,
            pieces: [{
                gt: 0,
                lte: 4,
                color: '#E87C25'
            }, {
                gt: 4,
                lte: 10,
                color: '#27727B'
            }, {
                gt: 10,
                lte: 12,
                color: '#FAD860'
            }, {
                gt: 12,
                lte: 25,
                color: '#60C0DD'
            },{
                gt: 25,
                lte: 30,
                color: '#B5C334'
            }, {
                gt: 30,
                color: '#C1232B'
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
                    {value: 40, name: '应用程序自身漏洞'},
                    {value: 28, name: '网页自身漏洞'},
                    {value: 13, name: '操作系统漏洞'},
                    {value: 11, name: '网络设备漏洞'},
                    {value: 5, name: '安全产品漏洞'},
                    {value: 3, name: '其他'}
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

    chart1.hideLoading();
    chart1.setOption(opinion);
})(jQuery);