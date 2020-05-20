import React, { useState, useEffect } from 'react'
import CodApi from '../services/api-service'
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"


const Chart = props => {
    const [playersData, setPlayersData] = useState([])

    const createChart = () => {

        const data = playersData.map(p => {
            const battleRoyale = p.segments
                .find(s => s.metadata.name === 'Battle Royale')
            return {
                player: p.platformInfo.platformUserHandle,
                kills: battleRoyale.stats.kills.value
            }
        })
        const chart = am4core.create("chartdiv", am4charts.XYChart)
        chart.data = data
        chart.scrollbarX = new am4core.Scrollbar()
        // Create axes
        const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        categoryAxis.dataFields.category = "player"
        categoryAxis.renderer.grid.template.location = 0
        categoryAxis.renderer.minGridDistance = 30
        categoryAxis.renderer.labels.template.horizontalCenter = "right"
        categoryAxis.renderer.labels.template.verticalCenter = "middle"
        categoryAxis.renderer.labels.template.rotation = 270
        categoryAxis.tooltip.disabled = true
        categoryAxis.renderer.minHeight = 110

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.renderer.minWidth = 50

        // Create series
        const series = chart.series.push(new am4charts.ColumnSeries())
        series.sequencedInterpolation = true
        series.dataFields.valueY = "kills"
        series.dataFields.categoryX = "player"
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]"
        series.columns.template.strokeWidth = 0

        series.tooltip.pointerOrientation = "vertical"

        series.columns.template.column.cornerRadiusTopLeft = 10
        series.columns.template.column.cornerRadiusTopRight = 10
        series.columns.template.column.fillOpacity = 0.8

        // on hover, make corner radiuses bigger
        const hoverState = series.columns.template.column.states.create("hover")
        hoverState.properties.cornerRadiusTopLeft = 0
        hoverState.properties.cornerRadiusTopRight = 0
        hoverState.properties.fillOpacity = 1

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index)
        })

        chart.cursor = new am4charts.XYCursor()
    }

    useEffect(() => {
        const api = new CodApi()
        am4core.useTheme(am4themes_animated)
        if (props.playerList.length > 0) {
            (async () => {
                const promises = props.playerList
                    .map(p => api.getProfileData(p.platform, p.username))
                const values = await Promise.all(promises)
                setPlayersData(values.map(v => v.data.data))
            })()
        }
    }, [props.playerList])
    console.log(playersData)
    if (playersData) createChart()
    return null
}

export default Chart