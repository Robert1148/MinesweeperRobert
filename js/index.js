function setFlagge(x) {

    var tmp = x.id.slice(1).split('x');
    var i = Number(tmp[0]);
    var j = Number(tmp[1]);
    if (Zustand == 1) {
        if (!hasClass(x, 'clue') && !hasClass(x, 'mine')) {
            if (!hasClass(x, 'flag') && Flaggen > 0) {
                x.className = 'flag';
                --Flaggen;
                PositionF[i][j] = 1;
            }
            else if (hasClass(x, 'flag')) {
                x.className = 'tile';
                ++Flaggen;
                PositionF[i][j] = 0;
            }
            document.getElementById('minesLeft').innerHTML = Flaggen;

            if (Flaggen == 0)
                checkWin();
        } else
            return;
    }
}
function hasClass(obj, c) {
    var tmp = obj.className.split(' ');
    for (i in tmp)
        if(tmp[i] == c)
            return true;
    return false;

}

function checkWin() {

    if(Flaggen==0) {
        var w = true;
        for(a=1;a<=Hoehe;++a)
            for(b=1;b<=Breite;++b)
                if(PositionM[a][b]!=PositionF[a][b])

                    win = false;

        if(w)
            youWin();
        else
            return;
    }
    else return;

}
