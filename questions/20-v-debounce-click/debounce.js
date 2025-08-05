function debounce(fn,dutation){
  let timer = null
  return (...arg)=>{
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
    fn.apply(this,arg)
    }, dutation);
  }
}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

const fn = debounce(onClick,1000)
fn()
fn()

fn()
fn()
fn()
