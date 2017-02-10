var pikesPlace = {
  min: 17,
  max: 88,
  avgCookieSale: 5.2,
  timeOfDay: ['Ten:', 'Eleven:', 'Twelve:', 'One:', 'Two:', 'Three:', 'Four:', 'Five:']
  randCustPerHour: function (min, max) {
    return Math.random() * (max - min) + min
  },
  // other methods to aggregate data...
  numberCookiesPerHour: function ()
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    // 1. Get an element by Id from your html
    // 2. Create a UL element
    // 3. Create and populate an LI element for each of the data points that you want to render
    // 4. Append the LI to the UL
    // 5. Append the UL to the element that you stored in step 1
  }
}
