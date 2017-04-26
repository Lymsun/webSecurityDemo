/**
 * Created by lymsu on 2017/4/25.
 */

$(function ($) {
    var chart5 = echarts.init(document.getElementById('chart5'));

    var mapData = [
        {
            'name': '北京',
            'longitude': '116.46',
            'latitude': '39.92',
            'value': 360,
            'color': '#FE8463'
        },
        {
            'name': '上海',
            'longitude': '121.48',
            'latitude': '31.22',
            'value': 300,
            'color': '#9BCA63'
        },
        {
            'name': '广州',
            'longitude': '113.23',
            'latitude': '23.16',
            'value': 280,
            'color': '#FAD860'
        },
        {
            'name': '天津',
            'longitude': '117.2',
            'latitude': '39.13',
            'value': 180,
            'color': '#F3A43B'
        },
        {
            'name': '深圳',
            'longitude': '114.07',
            'latitude': '22.62',
            'value': 160,
            'color': '#60C0DD'
        }
    ];

    var data = [
        {
            name: '北京',
            value: 29
        },
        {
            name: '上海',
            value: 19
        },
        {
            name: '广州',
            value: 17
        },
        {
            name: '天津',
            value: 6
        },
        {
            name: '深圳',
            value: 5
        }
    ];
    var categoryData = [];
    for(var i = 0; i < data.length; i++) {
        categoryData.push(data[i].name);
    }

    chart5.showLoading();

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
            map: 'china',
            roam: false,
            center: [117.27, 31.86],
            zoom: 2,
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
            right: 40,
            top: 160,
            width: '30%',
            height: '30%'
        },
        xAxis: {
            type: 'value',
            scale: true,
            min: 0,
            position: 'top',
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
                onZero: true
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 2,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
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
                    fontSize: 20
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
                            fontSize: 20
                        }
                    }
                },
                data: data
            }
        ]
    };

    chart5.hideLoading();
    chart5.setOption(opinion);
})(jQuery);