var $out = document.getElementById('out')
function out() {
    $out.innerHTML = $out.innerHTML + 
        '\n' + Date.now() + ' ' + 
        ([].join.call(arguments, ' '))
}

document.getElementById('go').addEventListener('click', function () {
    var settings = {
        method: 'POST',
        mimeType: 'application/json',
        timeout: 5000,
        success: function (res) {
            console.log(1, res)
            out('SUCCESS - 204')
        },
        error: function (e) {
            var status = e.status
            
            if (status == 0) {
                status = 'ERROR: Ran into timeout but expected 204'     
            }
            
            console.log('error', e)
            out(status)
        }
    }
    
    out('Request', JSON.stringify(settings))
    $.ajax('http://localhost:8002', settings)
})

$out.innerHTML = 'page loaded'