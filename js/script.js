function Submit(){
    let check = true
    let name = document.getElementById('name')
    let address = document.getElementById('address')
    let phone = document.getElementById('phone')
    let tour = document.getElementById('tour')
    let vehicle= [document.getElementById('mb'),document.getElementById('eto')]
    let Khach = [document.getElementById('nl'),document.getElementById('te')]
    if(name.value == '' || /^[a-z]{0,}$/.test(name.value) == false){
        name.parentNode.appendChild(createNodeP('Tên chỉ có thể chứa chữ và không được để trống'))
        check = false
    }
    if(address.value =='' || /^[a-z0-9]$/.test(address.value) == false){
            address.parentNode.appendChild(createNodeP('Địa chỉ có thể là chữ, số và không được để trống'))
            check = false
    }
    if(phone.value=='' ||/^[0-9]{10}$/.test(phone.value)){
        phone.parentNode.appendChild(createNodeP('sdt gồm 10 chữ số và không được để trống'))
        check = false
    }
    if(isNaN(Khach[0].value)==false||isNaN(Khach[1].value)==false){
        Khach[0].parentNode.parentNode.appendChild(createNodeP('Số lượng đoàn khách phải là số  và không được để trống'))
        check = false
    }
    if(vehicle[0].checked == false &&vehicle[1].checked==false){
        vehicle[0].parentNode.appendChild(createNodeP('Bạn phải lựa chọn 1 trong 2'))
        check = false
    }
    if(tour.value ==''){
        tour.parentNode.appendChild(createNodeP('Bạn Phải chọn tour'))
        check = false
    }

}
function createNodeP(txt){
    let text = document.createTextNode(txt)
    let p = document.createElement('p')
    p.appendChild(text)
    p.style.color = 'red'
    p.className = 'redp'
    return p
}