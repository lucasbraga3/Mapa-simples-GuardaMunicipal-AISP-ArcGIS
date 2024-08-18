# Como Utilizar

Ative o servidor através do arquivo **geojsonsender.js** (observação: este arquivo simula o uso de uma API). Para a aplicação utilizar o arquivo **guardas_mun.geojson**, ambos estão localizados dentro da pasta `geojson`.

Após realizar o passo anterior, abra o arquivo **index.html** localizado na pasta `web` e a aplicação estará pronta para uso.

Os dados referentes às AISPs são adquiridos através da URL do [ArcGIS REST Services Directory](https://gis-portal.westeurope.cloudapp.azure.com/server/rest/services/00_PUBLICACOES/seg_aisp_mprj/FeatureServer). Vale mencionar que os dados referentes aos batalhões da Guarda Municipal também foram extraídos desta fonte.

Todos os dados são obtidos do portal IDE do Rio de Janeiro.

Requisitos: Node.js para executar o geojsonsender.js.
