
document.getElementById('submit').addEventListener('click',add)
function mamta(n,e,a,am){
this.name = n
this.email = e
this.address = a
this.amount = am
}
function add(){
  let form = document.getElementById('signup')

  let name = form.name.value
  let email = form.email.value
  let address = form.address.value
  let amount = form.amount.value

  var userdata = new mamta(name,email,address,amount)

  var arr = JSON.parse(localStorage.getItem('user')) || []

  arr.push(userdata)

  localStorage.setItem('user',JSON.stringify(arr))
}
