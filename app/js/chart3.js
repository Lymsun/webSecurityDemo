/**
 * Created by lymsu on 2017/4/25.
 */

(function ($) {
    var chart3 = echarts.init(document.getElementById('chart3'));
    var xData = [15, 9.83, 7.67, 7.17, 6.33, 6.17, 5.83, 5.67, 5.33, 3.83, 3.67, 3.33, 3, 2.5,
        2.19, 2.15, 2, 2, 1.83, 1.33, 1.17, 0.83, 0.67, 0.33, 0.17];
    var yData = ['1、暴力破解密码', '2、地址/端口扫描', '3、Dos/DDos', '4、垃圾邮件', '5、蠕虫/病毒攻击',
        '6、SYN/UDP/ICMP/DNS泛洪攻击', '7、信息泄露', '8、IDS/IPS逃逸', '9、SQL命令注入', '10、木马', '11、恶意代码',
        '12、业务逻辑', '13、代码执行', '14、ARP欺骗', '15、间谍软件/广告软件', '16、IP分片报文攻击', '17、ARP主动反向查询攻击',
        '18、Land攻击', '19、Smurf攻击', '20、Tear Drop', '21、IP Spoofing', '22、Fraggle攻击','23、超大ICMP报文攻击',
        '24、死亡之ping', '25、网站篡改'];

    var xMax = 18;
    var dataShadow = [];
    for (var i = 0; i < xData.length; i++) {
        dataShadow.push(xMax);
    }

    chart3.showLoading();

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
        grid: {
            left: 200,
            width: '80%'
        },
        xAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        yAxis: {
            type: 'category',
            data: yData,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            inverse: true
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: true
            },
            {
                type: 'bar',
                data: xData,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: '{c}',
                        position: 'right',
                        show: true,
                        textStyle: {
                            fontSize: 16
                        }
                    }
                }
            },
            {
                type: 'pie',
                radius : '55%',
                center: ['70%', '60%'],
                clockwise: false,
                data:[
                    {
                        value:15,
                        name:'暴力破解密码',
                        itemStyle: {
                            normal: {color: '#C1232B'}
                        }
                    },
                    {
                        value:9.83,
                        name:'地址/端口扫描',
                        itemStyle: {
                            normal: {color: '#B5C334'}
                        }
                    },
                    {
                        value:7.67,
                        name:'Dos/DDos',
                        itemStyle: {
                            normal: {color: '#FCCE10'}
                        }
                    },
                    {
                        value:7.17,
                        name:'垃圾邮件',
                        itemStyle: {
                            normal: {color: '#E87C25'}
                        }
                    },
                    {
                        value:6.33,
                        name:'蠕虫/病毒攻击',
                        itemStyle: {
                            normal: {color: '#27727B'}
                        }
                    },
                    {
                        value: 54,
                        name: '其他',
                        itemStyle: {
                            normal: {color: '#FFFFCC'}
                        }
                    }
                ],
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 24
                        },
                        formatter: "{b} : {d}%"
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    chart3.hideLoading();
    chart3.setOption(opinion);
})(jQuery);