import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "../../Components/Common/useChartColors";

const MarketplaceChart = ({ chartId, series }) => {
    var MarketplaceChartColors = useChartColors(chartId);

    var options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        // markers: {
        //     size: 4,
        // },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        colors: MarketplaceChartColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                id={chartId}
                data-colors='["--vz-primary","--vz-success", "--vz-light"]'
                data-colors-corporate='["--vz-primary","--vz-secondary", "--vz-light"]'
                data-colors-galaxy='["--vz-primary","--vz-success", "--vz-secondary"]'
                data-colors-classic='["--vz-primary","--vz-light", "--vz-secondary"]'
                type="line"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const PopularityChart = ({ chartId }) => {
    var PopularityChartColors = useChartColors(chartId);
    const series = [{
        name: 'Like',
        data: [12.45, 16.2, 8.9, 11.42, 12.6, 18.1, 18.2, 14.16]
    }, {
        name: 'Share',
        data: [-11.45, -15.42, -7.9, -12.42, -12.6, -18.1, -18.2, -14.16]
    }];

    const options = {
        chart: {
            type: 'bar',
            height: 260,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                borderRadius: [4, 4]
            },
        },
        dataLabels: {
            enabled: false,
            textAnchor: 'top',
        },
        colors: PopularityChartColors,

        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        yaxis: {
            labels: {
                show: false,
                formatter: function (y) {
                    return y.toFixed(0) + "%";
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            labels: {
                rotate: -90
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                // dir="ltr"
                options={options}
                series={series}
                data-colors='["--vz-success", "--vz-warning"]'
                data-colors-minimal='["--vz-gray-200", "--vz-primary"]'
                data-colors-corporate='["--vz-success", "--vz-secondary"]'
                data-colors-galaxy='["--vz-primary-rgb, 0.65", "--vz-primary"]'
                id={chartId}
                type="bar"
                height={260}
                className="apex-charts mt-n4"
            />
        </React.Fragment>
    );
};

const TopArtworkChart = ({ seriesData, chartsColor }) => {
    const topartworkColors = [chartsColor];
    var options = {
        chart: {
            width: 80,
            height: 30,
            type: "line",
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "smooth",
            width: 2.3,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: topartworkColors
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={[...seriesData]}
                type="line"
                height="30"
                width="80"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export { MarketplaceChart, PopularityChart, TopArtworkChart };