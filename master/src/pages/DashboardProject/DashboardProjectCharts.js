import React from 'react';
import ReactApexChart from "react-apexcharts";
import useChartColors from "../../Components/Common/useChartColors";

const ProjectsOverviewCharts = ({ chartId,series }) => {
    var linechartcustomerColors = useChartColors(chartId);

    var options = {
        chart: {
            height: 374,
            type: 'line',
            toolbar: {
                show: false,
            }
        },
        stroke: {
            curve: 'smooth',
            dashArray: [0, 3, 0],
            width: [0, 1, 0],
        },
        fill: {
            opacity: [1, 0.1, 1]
        },
        markers: {
            size: [0, 4, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10
            },
        },
        legend: {
            show: true,
            horizontalAlign: 'center',
            offsetX: 0,
            offsetY: -5,
            markers: {
                width: 9,
                height: 9,
                radius: 6,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                barHeight: '70%'
            }
        },
        colors: linechartcustomerColors,
        tooltip: {
            shared: true,
            y: [{
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;

                }
            }, {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(2) + "k";
                    }
                    return y;

                }
            }, {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;

                }
            }]
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                id={chartId}
                data-colors='["--vz-primary", "--vz-warning", "--vz-success"]' 
                data-colors-minimal='["--vz-primary", "--vz-primary-rgb, 0.1", "--vz-primary-rgb, 0.50"]' 
                data-colors-interactive='["--vz-primary", "--vz-info", "--vz-warning"]' 
                data-colors-creative='["--vz-secondary", "--vz-warning", "--vz-success"]' 
                data-colors-corporate='["--vz-primary", "--vz-secondary", "--vz-danger"]' 
                data-colors-galaxy='["--vz-primary", "--vz-primary-rgb, 0.1", "--vz-primary-rgb, 0.50"]' 
                data-colors-classic='["--vz-primary", "--vz-secondary", "--vz-warning"]'
                type="line"
                height="374"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const TeamMembersCharts = ({ seriesData, chartsColor }) => {
    // const series=  isApexSeriesData.series,
    const series = [seriesData];

    const options = {
        chart: {
            type: 'radialBar',
            width: 36,
            height: 36,
            sparkline: {
                enabled: !0
            }
        },
        dataLabels: {
            enabled: !1
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '50%'
                },
                track: {
                    margin: 1
                },
                dataLabels: {
                    show: !1
                }
            }
        },
        colors: [chartsColor]
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={[...series]}
                type="radialBar"
                height="36"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PrjectsStatusCharts = ({ chartId, series }) => {
    var donutchartProjectsStatusColors = useChartColors(chartId);

    var options = {
        labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
        chart: {
            type: "donut",
            height: 230,
        },
        plotOptions: {
            pie: {
                size: 100,
                offsetX: 0,
                offsetY: 0,
                donut: {
                    size: "90%",
                    labels: {
                        show: false,
                    }
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            lineCap: "round",
            width: 0
        },
        colors: donutchartProjectsStatusColors,
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                id={chartId}
                data-colors='["--vz-success", "--vz-primary", "--vz-warning", "--vz-danger"]' 
                data-colors-minimal='["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.50"]' data-colors-galaxy='["--vz-primary", "--vz-primary-rgb, 0.85", "--vz-primary-rgb, 0.70", "--vz-primary-rgb, 0.50"]'
                type="donut"
                height="230"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export { ProjectsOverviewCharts, TeamMembersCharts, PrjectsStatusCharts };