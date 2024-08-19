require(["esri/Map", "esri/views/MapView","esri/layers/FeatureLayer","esri/widgets/Legend","esri/widgets/Expand", "esri/layers/GeoJSONLayer"], (Map, MapView,FeatureLayer,Legend,Expand,GeoJSONLayer) => {
    const url_bat_mun = "http://localhost:8080/Batalhao_das_Guardas_Municipais_0.geojson";
    const url_aisp = "https://gis-portal.westeurope.cloudapp.azure.com/server/rest/services/00_PUBLICACOES/seg_aisp_mprj/FeatureServer";
    const template = {
        title: "{municipio}",
        lastEditInfoEnabled: false,
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "municipio",
                label: "Município",
                visible: true
              },
              {
                fieldName: "corporacao",
                label: "Corp.",
                visible: true
              },
              {
                fieldName: "endereco",
                label: "Endereço",
                visible: true
              },
              {
                fieldName: "contato",
                label: "Contato",
                visible: true
              },
              {
                fieldName: "cobertura",
                label: "Cobertura",
                visible: true
              }
            ]
          }
        ]
    

        
    };

    const renderer = {
        type: "simple",
        symbol: {
            type: "simple-marker",
            color: "orange",
            outline: {
              color: "white"
            }
          }
        };

    const layerbatalhoes = new GeoJSONLayer({
        title: "Batalhão das Guardas Municipais",
        url: "http://localhost:8080/guardas_mun.geojson",
        copyright: "CSI/MPRJ e sites das Prefeituras Municipais, 2016",
        popupTemplate: template,
    });

    const layeraisp = new FeatureLayer({
        title: "Áreas Integradas de Segurança Pública",
        url: url_aisp
    });

    const map = new Map({
      basemap: "gray-vector",
      layers: [ layeraisp, layerbatalhoes]
    });
    
    const view = new MapView({
      container: "viewDiv",
      map: map,
      extent: { 
        xmin: -42.556404,
        ymin: -21.900925,
        xmax: -43.556404,
        ymax: -22.900925,
        spatialReference: { wkid: 4326 }
      }
    });
    const legend = new Legend({
      view: view,
      container: "legendDiv"
    });
    const expand = new Expand({
      view: view,
      content: legend,
      expanded: true
  });
  layerbatalhoes.on("layerview-create-error", function(event) {
    console.error("Layer view failed to create: ", event);
  });
    view.ui.add(expand, "top-right");});