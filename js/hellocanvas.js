//helocanvas.js
function main() {
    //获取canvas元素
    var canvas = document.getElementById('webgl');

    //获取webgl上下文
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('failed');
        return;
    }

    //指定清空canvas的颜色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

}