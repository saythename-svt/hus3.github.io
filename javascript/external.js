/*arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
  document.writeln(arr[i],"<br>");
}*/
/*user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);*/
var webmaps =
[
  ["Zillow Review","https://www.zillow.com/","This web mapping application does well in its purpose; it was made to show where listed houses are, and it does just that. The interface also feels very modern and smooth, which is quite enjoyable."],
    ["Harris County Commissioner Precinct Review","https://www.harriscountytx.gov/Harris-County-Commissioner-Court-Precincts","This web mapping application works at a basic, simple level and does what it is supposed to do. In fact, one of its strengths is its simplicity; I can get the exact information I need, and I can get it quickly and accurately."]
];

function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
document.write(welcome());
function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
 }
