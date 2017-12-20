//hellopoint.js
//设置顶点着色器
//赋值必须为浮点数，整型会出错
var VSHADER_SOURSE =
    'void main() {\n' +
    'gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
    'gl_PointSize = 10.0;\n' +
    '}\n';

//设置片元着色器
var FSHADER_SOURSE =
    'void main() { \n' +
    'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    var canvas = document.getElementById('canvas');

    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('failed');
        return;
    }

    //init shader
    if (!initShaders(gl, VSHADER_SOURSE, FSHADER_SOURSE)) {
        console.log('failed');
        return;
    }

    gl.clearColor(0.0, 1.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}