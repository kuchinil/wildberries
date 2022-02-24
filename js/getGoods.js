const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getData = () => {
    fetch('https://test-da8cf-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      console.log(link)
      getData()
    })
  })

  localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]))

  const goods = JSON.parse(localStorage.getItem('goods'))

  localStorage.removeItem('goods')
  console.log(localStorage)
}

getGoods()
