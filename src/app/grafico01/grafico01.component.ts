import { Component, OnInit } from "@angular/core";

import * as Highcharts from "highcharts";
import { DatosService } from "../datos.service";

@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Medicos con mas consultas atendidas"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
        name: "Consultas atendidas",
        type: "pie",
        colorByPoint: true,
        data: []
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.datosService.consultas().subscribe(
      result => {
        const misDatos: any = result;
        const datos = misDatos.map((x: any) => {
          return { name: x._id, y: x.total_consulta };
        });

        console.log(datos);
        this.chartOptions.series[0]["data"] = datos;
        // ];

        //dataSeries;

        Highcharts.chart("grafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
