
var sepchar;
// print process.argv
process.argv.forEach(function (val, index, array) {
  //console.log("Your command line arg was: "+index + ': ' + val);
  if (index == 3)
  {
	  sepchar = val;
	  console.log("Seperation character is '"+sepchar+"'");
  }
});

var fileSystem = require("fs");
var Transform = require('stream').Transform;
var util = require('util');
if (!Transform)
{
Transform = require('readable-stream/transform');
}

function PatternMatch()
{
Transform.call(
this,
{
objectMode: true
}
);
//...
}

util.inherits(PatternMatch, Transform);

PatternMatch.prototype._transform = function(chunk, encoding, getNextChunk){
//...
}

PatternMatch.prototype._flush = function(flushCompleted){
//...
}

function program()
{
function option(pattern) //'-p, --pattern <pattern>', 'Input Pattern such as .,'
{}
function parse(process_argv) //process.argv
{}
}

var inputStream = fileSystem.createReadStream("input-sensor.txt");

var patternStream = fileSystem.createReadStream("input-sensor.txt");

patternStream.on('data' , function (doc)
{
	//console.log(String.fromCharCode(doc))
	//console.log(doc)
	var currentSentence = "";
	console.log("-----------------------Input---------------------------");
	console.log("[ ");
	for(i=0 ; i< doc.length; i++)
	{
		//console.log(String.fromCharCode(doc[i])) //String.fromCharCode(doc)
		currentSentence += String.fromCharCode(doc[i]);
	}
	console.log(currentSentence);
	console.log("] ");
	currentSentence = "";
	
	console.log("-----------------------Output---------------------------");
	console.log("[ ");
	for(i=0 ; i< doc.length; i++)
	{
		//console.log(String.fromCharCode(doc[i])) //String.fromCharCode(doc)
		if (String.fromCharCode(doc[i]) != sepchar)
		{
		currentSentence += String.fromCharCode(doc[i]);
		}
		else
		{
		console.log("'" + currentSentence + "'" + sepchar);
		currentSentence = "";
		}
	}
	console.log("]");
});

