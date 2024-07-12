function Map1() {
  const arr=[1,2,3,4,5];
  function handleSubmit (e) {
      e.preventDefault ();
      alert (document.getElementById('uname').value);
    }
    function mapdata(){
      var a = arr.map((value,index)=>parseInt(value)+2)
      document.getElementById('test1').innerHTML = a
  }
  function powerdata(){
      var a = arr.map((value)=>value**2)
      document.getElementById('test1').innerHTML = a
  }
  function handleChange(event) {
      document.getElementById('test').innerHTML =event.target.value;
  }
  return (
  <div>
      <form onSubmit = {handleSubmit}>
          <input type="text" id="uname" onChange={handleChange}></input>
          <input type="submit"/>
      </form>

     <h1 id="test">On change event</h1>

     <button style={{backgroundColor:'black',padding:"20px",color:"white"}} onClick={mapdata} onDoubleClick={powerdata}>Click</button>
     <h1 id="test1">Click/DoubleClick event</h1>
  </div>
  )
}

export default Map1
