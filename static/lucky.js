/** processForm: get data from form and make AJAX call to our API. */
const BASE_URL = "http://localhost:5000/api";

async function processForm(evt) {
  evt.preventDefault()
  const name = $("#name").val();
  const email = $("#email").val();
  const year = $("#year").val();
  const color = $("#color").val();

  const res = await axios.post(`${BASE_URL}/get-lucky-num`, {
    name,
    email,
    year,
    color
  });
  handleResponse(res)
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(res) {
  data = res.data
  console.log(data)
  $('b').empty()
  if ("errors" in data){
    console.log('errors exists')
    for (error in data.errors) {
      $(`#${error}-err`).text(data.errors[error])
      console.log(data.errors[error])
    }
  } else {
    $('#lucky-results').text(`Your lucky number is ${data.num.num} (${data.num.fact}).
    Your birth year (${data.year.year}) fact is ${data.year.fact}`
    )
  }
}


$("#lucky-form").on("submit", processForm);