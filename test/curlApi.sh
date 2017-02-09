#!/bin/bash

clear

ROUTE="localhost:8080/api/message"
METHOD="GET"

echo "============"
echo "CURL $METHOD for $ROUTE"
echo "============"
echo ""
echo "Response ---"

curl -X $METHOD $ROUTE

echo ""
echo "End Response"