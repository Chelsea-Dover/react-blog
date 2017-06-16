#!/bin/bash

MYFILE=$1
FILECONTENTS=$(<$MYFILE)
echo $FILECONTENTS
curl -X PUT -d {"filetest":"$FILECONTENTS"} 'https://cmsblog-aaa94.firebaseio.com/articles.json'
