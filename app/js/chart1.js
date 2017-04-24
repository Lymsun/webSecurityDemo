/**
 * Created by lymsu on 2017/4/25.
 */

(function ($) {
    var chart1 = echarts.init(document.getElementById('chart1'));

    var xData = ['应用程序自身漏洞', '网页自身漏洞', '操作系统漏洞', '网络设备漏洞', '安全产品漏洞'];
    var yData = [45, 28, 13, 11, 3];
    var yMax = 75;
    var dataShadow = [];
    for (var i = 0; i < xData.length; i++) {
        dataShadow.push(yMax);
    }

    chart1.showLoading();

    var opinion = {
        xAxis: {
            type: 'category',
            data: xData,
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
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                data: yData,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: '{c}',
                        position: 'top',
                        show: true,
                        textStyle: {
                            fontSize: 20
                        }
                    }
                }
            }
        ]
    };

    chart1.hideLoading();
    chart1.setOption(opinion);
})(jQuery);