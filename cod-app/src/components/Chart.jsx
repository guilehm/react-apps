import React, { useEffect, useState } from 'react'

import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'


const Chart = ({ players, actions}) => {

    const [stat, setStat] = useState('kills')
    const [mainChart, setMainChart] = useState()

    const updateStat = stat => {
        mainChart.dispose()
        setStat(stat)
    }

    useEffect(() => {
        if (!players.length > 0) return
        const data = players.map(p => {
            const battleRoyale = p.segments
                .find(s => s.metadata.name === 'Battle Royale')
            return {
                player: p.platformInfo.platformUserHandle,
                [stat]: battleRoyale.stats[stat].value
            }
        })
        am4core.useTheme(am4themes_animated)
        const chart = am4core.create('chartdiv', am4charts.XYChart)
        chart.data = data
        chart.scrollbarX = new am4core.Scrollbar()
        // Create axes
        const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        categoryAxis.dataFields.category = 'player'
        categoryAxis.renderer.grid.template.location = 0
        categoryAxis.renderer.minGridDistance = 30
        categoryAxis.renderer.labels.template.horizontalCenter = 'right'
        categoryAxis.renderer.labels.template.verticalCenter = 'middle'
        categoryAxis.renderer.labels.template.rotation = 270
        categoryAxis.tooltip.disabled = true
        categoryAxis.renderer.minHeight = 110

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.renderer.minWidth = 50

        // Create series
        const series = chart.series.push(new am4charts.ColumnSeries())
        series.sequencedInterpolation = true
        series.dataFields.valueY = stat
        series.dataFields.categoryX = 'player'
        series.tooltipText = '[{categoryX}: bold]{valueY}[/]'
        series.columns.template.strokeWidth = 0

        series.tooltip.pointerOrientation = 'vertical'

        series.columns.template.column.cornerRadiusTopLeft = 10
        series.columns.template.column.cornerRadiusTopRight = 10
        series.columns.template.column.fillOpacity = 0.8

        // on hover, make corner radiuses bigger
        const hoverState = series.columns.template.column.states.create('hover')
        hoverState.properties.cornerRadiusTopLeft = 0
        hoverState.properties.cornerRadiusTopRight = 0
        hoverState.properties.fillOpacity = 1

        series.columns.template.adapter.add('fill', function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index)
        })

        chart.cursor = new am4charts.XYCursor()
        setMainChart(chart)
    }, [players, stat])

    return (
        players.length > 0 ?
        <React.Fragment>
            <h2>{stat}</h2>

            <select
                name='platform'
                value={stat}
                onChange={e => updateStat(e.target.value)}>
                <option value='kills'>kills</option>
                <option value='deaths'>deaths</option>
                <option value='downs'>downs</option>
                <option value='kdRatio'>kd</option>
                <option value='wins'>wins</option>
                <option value='gamesPlayed'>games played</option>
                <option value='contracts'>contracts</option>
                <option value='level'>level</option>
            </select>
            <div id='chartdiv'
                style={{ width: '100%', height: '500px' }}>
            </div>
        </React.Fragment>
        : null
    )
}


export default Chart