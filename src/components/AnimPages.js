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
            <div className={state=0?'btnTleft':'btnCleft'}>
                1
            </div>
            <div className={state=2?'lineDleft':'lineAleft'}>
                
            </div>
            <div className={state=1?'btnTmid':'btnCmid'}>
                2
            </div>
            <div className={state=1?'lineAright':'lineDright'}>
                
            </div>
            <div className={state=2?'btnTright':'btnCright'}>
                3
            </div>
        </div>
     );
}

export default AnimPages;