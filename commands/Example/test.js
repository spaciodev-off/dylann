module.exports ={
name:"test",
aliases:["test1","test2","test3"],
$if: "old",
code:`
This is an example <@$authorID>

$if[$message[1]==1]
teeeest
$else
yaaaaay
$endif
`
}
