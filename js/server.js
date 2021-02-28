//обрабатываем событие submit
$('#form').on('submit',submitForm);

var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        // dataType : 'JSON',
        data: data
    })
};

//обработчик кнопки
function submitForm(e)
{   //отменяет перезапуск страницы при нажатии на кнопку
    e.preventDefault();

    //элемент из разметки для которого сделано событие
    //вытаскивает все данные в json формате
    //берет url из аттрибута в форме html
    //определяет метод аттрибута в форме html
    var form = $(e.target),
    data=form.serialize(),
    url=form.attr('action'),
    type=form.attr('method');

    //done - обработчик событий в случае успешного выполнения
    ajaxForm(form).done(function(msg) {
        var status = msg.status;
    //успешное выполнение не работает, переходит сразу на else
    if(status === 'Ok')
    {
        var class_1 = document.querySelector('.container').appendChild(document.createElement('div'));
        class_1.className='ok';
        class_1.innerHTML='отправлено';
        // $('.conrainer').append('<div class="ok">отправлено</div>');
    }
    else{
        var class_2 = document.querySelector('.container').appendChild(document.createElement('div'));
        class_2.className='err';
        class_2.innerHTML='ошибка';
            // class_2.appendChild('<div class="err">ошибка</div>');
        }
    }).fail(function(jqXHR, textStatus){
        alert(textStatus);
    });
};