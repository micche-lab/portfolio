// 表示の際に実行
function doGet(req) {
  const template = 'form';
  const htmlOutput = HtmlService.createTemplateFromFile(template).evaluate();
  htmlOutput.setTitle('仕事登録フォーム')
  .setFaviconUrl('https://drive.google.com/uc?id=1xYrIR6EcYfYKDbtNCy42aXyfep1SVPPe&.png')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOutput;
}
// CSSを読み込む関数
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}