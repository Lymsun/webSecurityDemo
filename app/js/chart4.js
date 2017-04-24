/**
 * Created by lymsu on 2017/4/24.
 */

(function ($) {
    var chart4 = echarts.init(document.getElementById('chart4'));
    var geoCoordMap = {
        "中国": [104.195397,35.86166],
        "美国": [-95.712891,37.09024],
        "墨西哥": [-102.552784,23.634501],
        "英国": [-3.435973,55.378051],
        "德国": [10.451526,51.165691],
        "法国": [2.213749,46.227638],
        "西班牙": [-3.74922,40.463667],
        "俄罗斯": [105.318756,61.52401],
        "印度": [78.96288,20.593684],
        "韩国": [127.766922,35.907757]
    };

    var data = [
        {
            name: '中国',
            value: 66.1
        },
        {
            name: '美国',
            value: 8.93
        },
        {
            name: '德国',
            value: 5.58
        },
        {
            name: '墨西哥',
            value: 5.18
        },
        {
            name: '法国',
            value: 2.05
        },
        {
            name: '印度',
            value: 1.68
        },
        {
            name: '西班牙',
            value: 1.63
        },
        {
            name: '英国',
            value: 1.53
        },
        {
            name: '韩国',
            value: 1.2
        },
        {
            name: '俄罗斯',
            value: 1.03
        }
    ];
    var categoryData = [];
    for(var i = 0; i < data.length; i++) {
        categoryData.push(data[i].name);
    }

    chart4.showLoading();

    var opinion = {
        backgroundColor: '#404a59',
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
        geo: {
            type: 'map',
            map: 'world',
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#ccc'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        grid: {
            left: 60,
            bottom: 40,
            width: '20%',
            height: '60%'
        },
        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 2,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'category',
            nameGap: 6,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#ddd'
                }
            },
            inverse: true,
            data: categoryData
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            /*{
                type: 'scatter',
                coordinateSystem: 'geo'
            }*/
            {
                id: 'bar',
                zlevel: 2,
                type: 'bar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                data: data
            }
        ]
    };

    chart4.hideLoading();
    chart4.setOption(opinion);

})(jQuery);