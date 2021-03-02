import { Component, OnInit } from "@angular/core";

import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

import { DatosService } from "../datos.service";

@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: "Sintomas mas comunes registrados",
      align: "center",
      verticalAlign: "middle",
      y: 150
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "150%"
      }
    },
    series: [
      {
        name: "Veces registradas",
        type: "pie",
        colorByPoint: true,
        data: []
      }
    ]
  };

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.datosService.sintomas().subscribe(
      result => {
        const misDatos: any = result;
        const datos = misDatos.map((y: any) => {
          return { name: y._id, y: y.total_consulta };
        });

        console.log(datos);
        this.chartOptions.series[0]["data"] = datos;
        // ];

        //dataSeries;

        Highcharts.chart("grafico02", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
