/**
 * Created by lymsu on 2017/4/25.
 */

(function ($) {
    var chart3 = echarts.init(document.getElementById('chart3'));
    var xData = [15, 9.83, 7.67, 7.17, 6.33, 6.17, 5.83, 5.67, 5.33, 3.83, 3.67, 3.33, 3, 2.5,
        2.19, 2.15, 2, 2, 1.83, 1.33, 1.17, 0.83, 0.67, 0.33, 0.17];
    var yData = ['暴力破解密码', '地址/端口扫描', 'Dos/DDos', '垃圾邮件', '蠕虫/病毒攻击',
        'SYN/UDP/ICMP/DNS泛洪攻击', '信息泄露', 'IDS/IPS逃逸', 'SQL命令注入', '木马', '恶意代码',
        '业务逻辑', '代码执行', 'ARP欺骗', '间谍软件/广告软件', 'IP分片报文攻击', 'ARP主动反向查询攻击',
        'Land攻击', 'Smurf攻击', 'Tear Drop', 'IP Spoofing', 'Fraggle攻击', '超大ICMP报文攻击',
        '死亡之ping', '网站篡改'];

    var xMax = 18;
    var dataShadow = [];
    for (var i = 0; i < xData.length; i++) {
        dataShadow.push(xMax);
    }

    chart3.showLoading();

    var opinion = {
        gird: {
            left: 60
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
                    fontSize: 12
                }
            }
        },
        yAxis: {
            type: 'category',
            data: yData,
            axisLabel: {
                textStyle: {
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
                        color: 'rgba(0, 0, 0, 0.05)'
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
            }
        ]
    };

    chart3.hideLoading();
    chart3.setOption(opinion);
})(jQuery);