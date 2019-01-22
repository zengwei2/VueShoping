const storege = {
    getData(){
        var data = new Date();
            var yy = data.getFullYear();
            var mm = data.getMonth()+1;
            var dd = data.getDate();
            var hh = data.getHours();
            var MM = data.getMinutes();
            var ss = data.getSeconds();

            return yy+'-'+mm+'-'+dd+" "+hh+':'+MM+':'+ss;
    }
}
export default storege;