export const styles:string = `
<style>

    *{
        position:relative,
        box-sizing:border-box,
    }
    body {
        display:flex;
        margin:0;
        width:100vw;
        height:100vh;
        justify-content:center;
        align-items:center;
        background:#262626;
    }
    canvas {
        width:16.5cm;
        height:24cm;
    }

    div {
        width:50vw;
        height:40vh;
    }
    input, select, button {
        display:block;
        border-radius:5px;
        margin:10px;
        padding:5px;
        width:100%;
        font-family:"Rubik";
        font-size:17px;
        outline:none;
    }

    button {
        background:#00647d;
        outline:none;
        border:none;
        font-weight:bold;
        color:#e3e3e3;
        padding:10px 5px;
    }
</style>

`