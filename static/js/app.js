function Prompt() {
    let toast = function (c) {
        const{
            msg = '',
            icon = 'success',
            position = 'top-end',

        } = c;

        const Toast = Swal.mixin({
            toast: true,
            title: msg,
            position: position,
            icon: icon,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({})
    }

    let success = function (c) {
        const {
            msg = "",
            title = "",
            footer = "",
        } = c

        Swal.fire({
            icon: 'success',
            title: title,
            text: msg,
            footer: footer,
        })

    }

    let error = function (c) {
        const {
            msg = "",
            title = "",
            footer = "",
        } = c

        Swal.fire({
            icon: 'error',
            title: title,
            text: msg,
            footer: footer,
        })

    }

    async function custom(c) {
        const {
            icon = "",
            msg = "",
            title = "",
            showConfirmButton = true,
        } = c;

        const { value: result } = await Swal.fire({
            icon: icon,
            title: title,
            html: msg,
            backdrop: false,
            focusConfirm: false,
            showCancelButton: true,
            showConfirmButton: showConfirmButton,
            willOpen: () => {
                if(c.willOpen !== undefined){
                    c.willOpen();
                }
            },
            didOpen: () => {
                if(c.didOpen !== undefined){
                    c.didOpen();
                }
            },
            preConfirm: () => {
                if(c.preConfirm !== undefined){
                    c.preConfirm();
                }
            }
        })
        
        //note:
        //if they click the web
        if(result){
            //if they did not click cancel on the box
            if(result.dismiss !== Swal.DismissReason.cancel){
                //and if there are some data get inputted in the box
                if(result.value !== ""){
                    //and if there is a callback function, we call it
                    if(c.callback !== undefined){
                        c.callback(result);
                    }
                }else{//if there isn't any input in the box, we do nothing
                    c.callback(false);
                }
            }else{//if they click cancel on the box, we do nothing
                c.callback(false);
            }
        }
    }

    return {
        toast: toast,
        success: success,
        error: error,
        custom: custom,
    }
}
