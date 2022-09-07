import '../css/animPages.css';
function AnimPages(state) {
    switch (state) {
        case 0:
            //Esta en la primera pagina
            break;
        case 1:
            //Esta en la segunda pagina
            break;
        case 2:
                //Esta en la tercera pagina
            break;
        default:
            break;
    }
    return ( 
        <div className="animPages">
            <div className={state=0?'btnCleft':'btnTleft'}>
                <p>1</p>
            </div>
            <div className={state=2?'lineAleft':'lineDleft'}>
                
            </div>
            <div className={state=1?'btnCmid':'btnTmid'}>
                <p>2</p>
            </div>
            <div className={state=1?'lineDright':'lineAright'}>
                
            </div>
            <div className={state=2?'btnDright':'btnTright'}>
                <p>3</p>
            </div>
        </div>
     );
}

export default AnimPages;