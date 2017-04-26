/**
 * Created by lymsu on 2017/4/24.
 */

(function ($) {
    var chart4 = echarts.init(document.getElementById('chart4'));
    var mapData = [
        {
            'name': '中国',
            'longitude': '104.195397',
            'latitude': '35.86166',
            'value': 460,
            'color': '#C1232B'
        },
        {
            'name': '美国',
            'longitude': '-95.712891',
            'latitude': '37.09024',
            'value': 400,
            'color': '#B5C334'
        },
        {
            'name': '德国',
            'longitude': '10.451526',
            'latitude': '51.165691',
            'value': 300,
            'color': '#FCCE10'
        },
        {
            'name': '墨西哥',
            'longitude': '-102.552784',
            'latitude': '23.634501',
            'value': 290,
            'color': '#E87C25'
        },
        {
            'name': '法国',
            'longitude': '2.213749',
            'latitude': '46.227638',
            'value': 280,
            'color': '#27727B'
        },
        {
            'name': '印度',
            'longitude': '78.96288',
            'latitude': '20.593684',
            'value': 270,
            'color': '#FE8463'
        },
        {
            'name': '西班牙',
            'longitude': '-3.74922',
            'latitude': '40.463667',
            'value': 260,
            'color': '#9BCA63'
        },
        {
            'name': '英国',
            'longitude': '-3.435973',
            'latitude': '55.378051',
            'value': 250,
            'color': '#FAD860'
        },
        {
            'name': '韩国',
            'longitude': '127.766922',
            'latitude': '35.907757',
            'value': 240,
            'color': '#F3A43B'
        },
        {
            'name': '俄罗斯',
            'longitude': '105.318756',
            'latitude': '61.52401',
            'value': 230,
            'color': '#60C0DD'
        }
    ];

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
            left: 90,
            bottom: 30,
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
                    color: '#fff',
                    fontSize: 24
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
                    color: '#ddd',
                    fontSize: 24
                }
            },
            inverse: true,
            data: categoryData
        },
        series: [
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: mapData.map(function (item) {
                    return {
                        name: item.name,
                        value: [
                            item.longitude,
                            item.latitude,
                            item.value
                        ],
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 18
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: item.color
                            }
                        }
                    };
                }),
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                symbolSize: function(val) {
                    return Math.max(val[2] / 10, 8);
                }
            },
            {
                zlevel: 1,
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
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#fff',
                            fontSize: 24
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