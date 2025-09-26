/*arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
  document.writeln(arr[i],"<br>");
}*/
/*user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);*/
var webmaps =
[
  ["The primary purpose of this web mapping application is to show the location of houses for sale approximate to the location or zip code you enter into the search function.","The web map performed better than I expected it to.",
    "The interface feels very modern and smooth, which is quite enjoyable."],
    ["The primary purpose of this web mapping application is to show which commissioner precinct a location or address in Harris County falls.",
    "This is not really a web application I would expect to be super fancy and do a lot of interesting things.","One of its strengths is its simplicity; I can get the exact information I need, and I can get it quickly andaccurately."]
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
