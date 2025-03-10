
const App = () => {

  function saveLocal() {
    const id = 123;
    const name = "web development"
    const True = ture
    localStorage.setItem('user_id', id)
    localStorage.setItem('user_name', name)
    localStorage.setItem('boolean', True)
    localStorage.setItem('array', [1, 2, 4])
    localStorage.setItem('object', JSON.stringify({ id: 123 }))
  }

  function clearkey() {
    localStorage.removeItem('user_name')
  }

  function getAll ()
  {
    const user_id =  JSON.parse (localStorage.getItem('user_id'))
    alert(user_id.id)
  }


  function ClearAll  (){
    localStorage.clear()
  }

  return (
    <>
      <button onClick={saveLocal}>save</button>
      <button onClick={clearkey}>clear key</button>
      <button onClick={getAll}>getAll Data</button>
      <button onClick={ClearAll }>Clear All </button>



    </>

  )
}

export default App